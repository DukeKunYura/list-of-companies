import { FC } from "react";
import styles from "./Main.module.scss";
import { Companies } from "../companies/Companies";
import { Employees } from "../employees/Employees";

/**
 * Основной компонент с двумя таблицами
 */
export const Main: FC = () => {
  return (
    <div className={styles.main}>
      <Companies />
      <Employees />
    </div>
  );
};
