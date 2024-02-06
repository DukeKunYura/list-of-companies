import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import styles from "./Employees.module.scss";
import { IEmployee } from "../../interfaces/interfaces";
import {
  addCheckedCompany,
  addCheckedEmployee,
  removeCheckedCompany,
  removeCheckedEmployee,
} from "../../redux/slices/masterSlice";

type Props = {
  employee: IEmployee;
};

export const Employee: FC<Props> = ({ employee }) => {
  const checkedCompanies = useAppSelector(
    (state) => state.master.checkedCompanies
  );
  const checkedEmployees = useAppSelector(
    (state) => state.master.checkedEmployees
  );
  const dispatch = useAppDispatch();

  function handleCheckItem() {
    if (!checkedEmployees.includes(employee.id)) {
      dispatch(addCheckedEmployee(employee.id));
    } else {
      dispatch(removeCheckedEmployee(employee.id));
    }
  }
  return (
    <div className={styles.row}>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          checked={checkedEmployees.includes(employee.id)}
          onChange={handleCheckItem}
        />
      </div>
      <div className={styles.surname}>{employee.surname}</div>
      <div className={styles.quantity}>{employee.firstName}</div>
      <div className={styles.address}>{employee.position}</div>
      <div className={styles.actions}>
        <BiSolidEdit size="1.6em" />
        <AiOutlineDelete size="1.6em" />
      </div>
    </div>
  );
};
