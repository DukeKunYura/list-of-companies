import { FC } from "react";
import { TbCategoryPlus, TbCategoryMinus } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Companies.module.scss";
import {
  checkAllCompanies,
  deleteCompanies,
  setIsCompanyAdding,
} from "../../redux/slices/masterSlice";
import { Company } from "./Company";
import { CompanyAddForm } from "./CompanyAddForm";

export const Companies: FC = () => {
  const checked = useAppSelector((state) => state.master.checkedCompanies);
  const companies = useAppSelector((state) => state.master.companies);
  const isCompanyAdding = useAppSelector(
    (state) => state.master.isCompanyAdding
  );

  const dispatch = useAppDispatch();

  function handleChange() {
    if (checked.length !== companies.length) {
      dispatch(checkAllCompanies(true));
    } else {
      dispatch(checkAllCompanies(false));
    }
  }
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.options}>
          <input
            type="checkbox"
            id="allChecked"
            checked={
              checked.length === companies.length && companies.length !== 0
            }
            onChange={handleChange}
          />
          <label htmlFor="allChecked">Выделить все</label>
        </div>
        <div className={styles.options}>
          {checked.length === 0 && (
            <>
              <a className={styles.icon}>
                <TbCategoryPlus size="1.5em" />
              </a>
              <a
                onClick={() => {
                  dispatch(setIsCompanyAdding());
                }}
              >
                Добавить компанию
              </a>
            </>
          )}
          {checked.length !== 0 && (
            <>
              <a className={styles.icon}>
                <TbCategoryMinus size="1.5em" />
              </a>
              <a
                onClick={() => {
                  dispatch(deleteCompanies());
                }}
              >
                Удалить выбранные
              </a>
            </>
          )}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.checkBox}></div>
          <div className={styles.title}>Название</div>
          <div className={styles.quantity}>
            Количество <br />
            сотрудников
          </div>
          <div className={styles.address}>Адрес</div>
          <div className={styles.actions}></div>
        </div>
        <div className={styles.items}>
          {isCompanyAdding && (
            <div className={styles.activeRow}>
              <CompanyAddForm />
            </div>
          )}
          {companies.map((item) => (
            <Company key={item.id} company={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
