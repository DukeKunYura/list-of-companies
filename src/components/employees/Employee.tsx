import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import styles from "./Employees.module.scss";
import { IEmployee } from "../../interfaces/interfaces";
import {
  addCheckedEmployee,
  deleteEmployee,
  removeCheckedEmployee,
  setEditingEmployee,
} from "../../redux/slices/masterSlice";
import { EmployeeEditForm } from "./EmployeeEditForm";

type Props = {
  employee: IEmployee;
};

export const Employee: FC<Props> = ({ employee }) => {
  const editingEmployeeId = useAppSelector(
    (state) => state.master.editingEmployeeId
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
      {editingEmployeeId === employee.id && (
        <EmployeeEditForm employee={employee} />
      )}
      {editingEmployeeId !== employee.id && (
        <>
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
            <BiSolidEdit
              size="1.6em"
              onClick={() => {
                dispatch(setEditingEmployee(employee.id));
              }}
            />
            <AiOutlineDelete
              size="1.6em"
              onClick={() => {
                dispatch(deleteEmployee(employee.id));
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
