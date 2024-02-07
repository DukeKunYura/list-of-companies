import { FC, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Companies.module.scss";
import { ICompany } from "../../interfaces/interfaces";
import { FaRegSave } from "react-icons/fa";
import { saveCompany, setEditingCompany } from "../../redux/slices/masterSlice";

type Props = {
  company: ICompany;
};

export const CompanyEditForm: FC<Props> = ({ company }) => {
  const [name, setName] = useState<string>(company.name);
  const [adress, setAdress] = useState<string>(company.adress);

  const dispatch = useAppDispatch();

  const handleChangeName = (name: string) => {
    setName(name);
  };

  const handleChangeAdress = (adress: string) => {
    setAdress(adress);
  };

  const handleSubmit = () => {
    if (name !== "" && adress !== "") {
      dispatch(saveCompany({ ...company, name: name, adress: adress }));
      dispatch(setEditingCompany(null));
    }
  };

  return (
    <>
      <div className={styles.checkBox}></div>
      <input
        className={styles.titleInput}
        value={name}
        maxLength={20}
        onChange={(e) => {
          handleChangeName(e.target.value);
        }}
      />
      <div className={styles.quantity}>{company.employees.length}</div>
      <input
        className={styles.adressInput}
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
