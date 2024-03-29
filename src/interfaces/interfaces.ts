export interface ICompany {
  id: string;
  name: string;
  adress: string;
  employees: IEmployees;
}

export type ICompanies = ICompany[];

export interface IEmployee {
  id: string;
  surname: string;
  firstName: string;
  position: string;
}

export type IEmployees = IEmployee[];
