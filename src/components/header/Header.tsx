import { FC } from "react";
import styles from "./Header.module.scss";
import { TbCircleLetterA } from "react-icons/tb";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <a className={styles.icon}>
        <TbCircleLetterA color="#A1A1AA" size="2em" />
      </a>
      <a className={styles.title}>Список компаний и сотрудников</a>
    </div>
  );
};
