import { FC, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./Companies.module.scss";
import { ICompany } from "../../interfaces/interfaces";
import {
  addCheckedCompany,
  removeCheckedCompany,
} from "../../redux/slices/masterSlice";

type Props = {
  company: ICompany;
};

export const Company: FC<Props> = ({ company }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useAppDispatch();

  function handleCheckItem() {
    if (!checked) {
      setChecked(true);
      dispatch(addCheckedCompany(company.id));
    } else {
      setChecked(false);
      dispatch(removeCheckedCompany(company.id));
    }
  }
  return (
    <div className={styles.row}>
      <input type="checkbox" checked={checked} onChange={handleCheckItem} />
      <div>{company.name}</div>
      <div>{company.adress}</div>
    </div>
  );
};
