import { FC } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Companies.module.scss";
import { checkAllCompanies } from "../../redux/slices/masterSlice";
import { Company } from "./Company";

export const Companies: FC = () => {
  const checked = useAppSelector((state) => state.master.checkedCompanies);
  const companies = useAppSelector((state) => state.master.companies);
  const dispatch = useAppDispatch();

  function handleChange() {
    if (checked.length !== companies.length) {
      dispatch(checkAllCompanies(true));
    } else {
      dispatch(checkAllCompanies(false));
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <input
          type="checkbox"
          name="allChecked"
          checked={checked.length === companies.length}
          onChange={handleChange}
        />
        <label htmlFor="allChecked">Выделить все</label>
        <a className={styles.icon}>
          <IoMdAddCircleOutline color="#A1A1AA" size="2em" />
        </a>
      </div>
      <div>
        {companies.map((item) => (
          <Company key={item.id} company={item} />
        ))}
      </div>
    </div>
  );
};
