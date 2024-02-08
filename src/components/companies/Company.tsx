import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Companies.module.scss";
import { ICompany } from "../../interfaces/interfaces";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import {
  addCheckedCompany,
  deleteCompany,
  removeCheckedCompany,
  setEditingCompany,
} from "../../redux/slices/masterSlice";
import { CompanyEditForm } from "./CompanyEditForm";

type Props = {
  company: ICompany;
};

/**
 * Компонент рендерит строку компания
 */
export const Company: FC<Props> = ({ company }) => {
  const checkedCompanies = useAppSelector(
    (state) => state.master.checkedCompanies
  );
  const editingCompanyId = useAppSelector(
    (state) => state.master.editingCompanyId
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
      {editingCompanyId === company.id && <CompanyEditForm company={company} />}
      {editingCompanyId !== company.id && (
        <>
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
            <BiSolidEdit
              size="1.6em"
              onClick={() => {
                dispatch(setEditingCompany(company.id));
              }}
            />
            <AiOutlineDelete
              size="1.6em"
              onClick={() => {
                dispatch(deleteCompany(company.id));
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
