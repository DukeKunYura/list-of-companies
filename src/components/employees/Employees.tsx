import { FC, useEffect, useState } from "react";
import { TbUsersPlus, TbUsersMinus } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Employees.module.scss";
import { checkAllEmployees } from "../../redux/slices/masterSlice";
import { ICompanies, IEmployees } from "../../interfaces/interfaces";
import { Employee } from "./Employee";

export const Employees: FC = () => {
  const checkedCompanies = useAppSelector(
    (state) => state.master.checkedCompanies
  );
  const checkedEmployees = useAppSelector(
    (state) => state.master.checkedEmployees
  );
  const companies = useAppSelector((state) => state.master.companies);
  const [employees, setEmployees] = useState<[] | IEmployees>([]);
  const dispatch = useAppDispatch();

  function handleChange() {
    if (checkedEmployees.length !== employees.length) {
      dispatch(checkAllEmployees(true));
    } else {
      dispatch(checkAllEmployees(false));
    }
  }

  useEffect(() => {
    if (checkedCompanies.length === 1) {
      const getEmployeesList = (companies: ICompanies, id: string) => {
        const company = companies.filter((item) => item.id === id);
        return company[0].employees;
      };
      const employees = getEmployeesList(companies, checkedCompanies[0]);
      setEmployees(employees);
    } else {
      setEmployees([]);
    }
  }, [checkedCompanies]);

  return (
    <>
      {employees.length > 0 ? (
        <>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <div className={styles.options}>
                <input
                  type="checkbox"
                  id="allCheckedEmployees"
                  checked={
                    checkedEmployees.length === employees.length &&
                    employees.length !== 0
                  }
                  onChange={handleChange}
                />
                <label htmlFor="allCheckedEmployees">Выделить всех</label>
              </div>
              <div className={styles.options}>
                {checkedEmployees.length === 0 && (
                  <>
                    <a className={styles.icon}>
                      <TbUsersPlus size="1.5em" />
                    </a>
                    <a>Добавить сотрудника</a>
                  </>
                )}
                {checkedEmployees.length !== 0 && (
                  <>
                    <a className={styles.icon}>
                      <TbUsersMinus size="1.5em" />
                    </a>
                    <a>Удалить выбранных</a>
                  </>
                )}
              </div>
            </div>
            <div className={styles.main}>
              <div className={styles.header}>
                <div className={styles.checkBox}></div>
                <div className={styles.surname}>Фамилия</div>
                <div className={styles.quantity}>Имя</div>
                <div className={styles.address}>Должность</div>
                <div className={styles.actions}></div>
              </div>
              <div className={styles.items}>
                {employees.map((item) => (
                  <Employee key={item.id} employee={item} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.table}>
            <div className={styles.tableHeader}>Компания не выбрана</div>
          </div>
        </>
      )}
    </>
  );
};
