import { FC, useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./Employees.module.scss";
import { checkAllEmployees } from "../../redux/slices/masterSlice";
import { ICompanies, IEmployees } from "../../interfaces/interfaces";

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
    if (employees.length !== checkedEmployees.length) {
      dispatch(checkAllEmployees(true));
    } else {
      dispatch(checkAllEmployees(false));
    }
  }

  useEffect(() => {
    console.log("сотрудники юзэффект");
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
      {employees && (
        <div className={styles.main}>
          <div className={styles.header}>
            <input
              type="checkbox"
              name="allChecked"
              checked={checkedEmployees.length === employees.length}
              onChange={handleChange}
            />
            <label htmlFor="allChecked">Выделить все</label>
            <a className={styles.icon}>
              <IoMdAddCircleOutline color="#A1A1AA" size="2em" />
            </a>
          </div>
          {employees.map((item) => (
            <div key={item.id}>{item.firstName}</div>
          ))}
        </div>
      )}
    </>
  );
};
