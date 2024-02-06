import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Companies.module.scss";
import { ICompany } from "../../interfaces/interfaces";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import {
  addCheckedCompany,
  removeCheckedCompany,
} from "../../redux/slices/masterSlice";

type Props = {
  company: ICompany;
};

export const Company: FC<Props> = ({ company }) => {
  const checkedCompanies = useAppSelector(
    (state) => state.master.checkedCompanies
  );
  const dispatch = useAppDispatch();

  function handleCheckItem() {
    if (!checkedCompanies.includes(company.id)) {
      dispatch(addCheckedCompany(company.id));
    } else {
      dispatch(removeCheckedCompany(company.id));
    }
  }
  return (
    <div
      className={
        checkedCompanies.includes(company.id) ? styles.activeRow : styles.row
      }
    >
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          checked={checkedCompanies.includes(company.id)}
          onChange={handleCheckItem}
        />
      </div>
      <div className={styles.title}>{company.name}</div>
      <div className={styles.quantity}>{company.employees.length}</div>
      <div className={styles.address}>{company.adress}</div>
      <div className={styles.actions}>
        <BiSolidEdit size="1.6em" />
        <AiOutlineDelete size="1.6em" />
      </div>
    </div>
  );
};
