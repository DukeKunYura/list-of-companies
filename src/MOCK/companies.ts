import { ICompanies } from "../interfaces/interfaces";
import { employees } from "./employees";

export const companies: ICompanies = [
  {
    id: "11111",
    name: "CompanyOne",
    adress: "Moskow",
    employees: employees,
  },
  {
    id: "22222",
    name: "CompanyTwo",
    adress: "Moskow ul. Kirova 7/4 99 ind: 222000",
    employees: employees,
  },
  {
    id: "33333",
    name: "CompanyThree",
    adress: "Moskow",
    employees: employees,
  },
  {
    id: "44444",
    name: "CompanyFour",
    adress: "Moskow",
    employees: employees,
  },
];
