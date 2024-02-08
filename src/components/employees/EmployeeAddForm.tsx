import { FC, useId, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Employees.module.scss";
import { FaRegSave } from "react-icons/fa";
import {
  addEmloyee,
  setIsEmployeeAdding,
} from "../../redux/slices/masterSlice";

/**
 * Компонент рендерит форму добавления сотрудника
 */
export const EmployeeAddForm: FC = () => {
  const [surname, setSurname] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [position, setPosition] = useState<string>("");

  const id = useId();

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
        addEmloyee({
          id,
          surname: surname,
          firstName: firstName,
          position: position,
        })
      );
      dispatch(setIsEmployeeAdding());
    }
  };

  return (
    <>
      <div className={styles.checkBox}></div>
      <input
        className={styles.surnameInput}
        placeholder="введите фамилию..."
        value={surname}
        maxLength={20}
        onChange={(e) => {
          handleChangeSurname(e.target.value);
        }}
      />
      <input
        className={styles.quantityInput}
        placeholder="введите имя..."
        value={firstName}
        maxLength={20}
        onChange={(e) => {
          handleChangeFirstName(e.target.value);
        }}
      />
      <input
        className={styles.adressInput}
        placeholder="введите должность..."
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
