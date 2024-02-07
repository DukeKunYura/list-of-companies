import { FC, useId, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Companies.module.scss";
import { FaRegSave } from "react-icons/fa";
import { addCompany, setIsCompanyAdding } from "../../redux/slices/masterSlice";

export const CompanyAddForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const id = useId();

  const dispatch = useAppDispatch();

  const handleChangeName = (name: string) => {
    setName(name);
  };

  const handleChangeAdress = (adress: string) => {
    setAdress(adress);
  };

  const handleSubmit = () => {
    if (name !== "" && adress !== "") {
      dispatch(addCompany({ id, name: name, employees: [], adress: adress }));
      dispatch(setIsCompanyAdding());
    }
  };

  return (
    <>
      <div className={styles.checkBox}></div>
      <input
        className={styles.titleInput}
        placeholder="введите название..."
        value={name}
        maxLength={20}
        onChange={(e) => {
          handleChangeName(e.target.value);
        }}
      />
      <div className={styles.quantity}>{"..."}</div>
      <input
        className={styles.adressInput}
        placeholder="введите адрес..."
        value={adress}
        maxLength={50}
        onChange={(e) => {
          handleChangeAdress(e.target.value);
        }}
      />
      <div className={styles.actions}>
        <FaRegSave size="1.5em" onClick={handleSubmit} />
      </div>
    </>
  );
};
