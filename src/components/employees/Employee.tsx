import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Employees.module.scss";
import { IEmployee } from "../../interfaces/interfaces";
import {
  addCheckedCompany,
  removeCheckedCompany,
} from "../../redux/slices/masterSlice";

type Props = {
  employee: IEmployee;
};

export const Employee: FC<Props> = ({ employee }) => {
  const checkedCompanies = useAppSelector(
    (state) => state.master.checkedCompanies
  );
  const dispatch = useAppDispatch();

  function handleCheckItem() {
    // if (!checkedCompanies.includes(company.id)) {
    //   dispatch(addCheckedCompany(company.id));
    // } else {
    //   dispatch(removeCheckedCompany(company.id));
    // }
  }
  return (
    <div className={styles.row}>
      <div className={styles.checkBox}>
        <input type="checkbox" checked={true} onChange={handleCheckItem} />
      </div>
      <div className={styles.title}>{employee.firstName}</div>
      <div className={styles.quantity}>{employee.surmame}</div>
      <div className={styles.address}>{employee.position}</div>
      <div className={styles.actions}>+ -</div>
    </div>
  );
};
