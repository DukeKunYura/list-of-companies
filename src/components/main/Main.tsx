import { FC } from "react";
import styles from "./Main.module.scss";
import { Companies } from "../companies/Companies";
import { Employees } from "../employees/Employees";

export const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Companies />
      <Employees />
    </div>
  );
};
