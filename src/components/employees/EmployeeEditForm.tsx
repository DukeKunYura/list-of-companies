import { FC, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Employees.module.scss";
import { IEmployee } from "../../interfaces/interfaces";
import { FaRegSave } from "react-icons/fa";
import {
  saveEmployee,
  setEditingEmployee,
} from "../../redux/slices/masterSlice";

type Props = {
  employee: IEmployee;
};

export const EmployeeEditForm: FC<Props> = ({ employee }) => {
  const [surname, setSurname] = useState<string>(employee.surname);
  const [firstName, setFirstName] = useState<string>(employee.firstName);
  const [position, setPosition] = useState<string>(employee.position);

  const dispatch = useAppDispatch();

  const handleChangeSurname = (surname: string) => {
    setSurname(surname);
  };

  const handleChangeFirstName = (firstName: string) => {
    setFirstName(firstName);
  };

  const handleChangePosition = (position: string) => {
    setPosition(position);
  };

  const handleSubmit = () => {
    if (surname !== "" && firstName !== "" && position !== "") {
      dispatch(
        saveEmployee({
          ...employee,
          surname: surname,
          firstName: firstName,
          position: position,
        })
      );
      dispatch(setEditingEmployee(null));
    }
  };

  return (
    <>
      <div className={styles.checkBox}></div>
      <input
        className={styles.surnameInput}
        value={surname}
        maxLength={20}
        onChange={(e) => {
          handleChangeSurname(e.target.value);
        }}
      />
      <input
        className={styles.quantityInput}
        value={firstName}
        maxLength={20}
        onChange={(e) => {
          handleChangeFirstName(e.target.value);
        }}
      />
      <input
        className={styles.adressInput}
        value={position}
        maxLength={40}
        onChange={(e) => {
          handleChangePosition(e.target.value);
        }}
      />
      <div className={styles.actions}>
        <FaRegSave size="1.5em" onClick={handleSubmit} />
      </div>
    </>
  );
};
