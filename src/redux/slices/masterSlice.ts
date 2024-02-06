import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICompanies } from "../../interfaces/interfaces";
import { companies } from "../../MOCK/companies";

type TState = {
  companies: ICompanies;
  checkedCompanies: string[];
  checkedEmployees: string[];
};

const initialState: TState = {
  companies: companies,
  checkedCompanies: [],
  checkedEmployees: [],
};

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    // добавление компании
    addCompany: (state, action) => {
      state.companies = action.payload;
      state.checkedEmployees = [];
    },
    // выбор компании
    addCheckedCompany: (state, action: PayloadAction<string>) => {
      state.checkedCompanies.push(action.payload);
      state.checkedEmployees = [];
    },
    // отмена выбора компании
    removeCheckedCompany: (state, action: PayloadAction<string>) => {
      state.checkedCompanies = state.checkedCompanies.filter(
        (item) => item !== action.payload
      );
      state.checkedEmployees = [];
    },
    // выбрать/отменить все компании
    checkAllCompanies: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.checkedCompanies = state.companies.map((item) => item.id);
      } else {
        state.checkedCompanies = [];
      }
      state.checkedEmployees = [];
    },
    // добавление сотрудника
    addEmloyee: (state, action) => {
      state.companies = action.payload;
      state.checkedEmployees = [];
    },
    // выбор сотрудника
    addCheckedEmployee: (state, action: PayloadAction<string>) => {
      state.checkedEmployees.push(action.payload);
    },
    // отмена выбора сотрудника
    removeCheckedEmployee: (state, action: PayloadAction<string>) => {
      state.checkedEmployees = state.checkedEmployees.filter(
        (item) => item !== action.payload
      );
    },
    // выбрать/отменить всех сотрудников компании
    checkAllEmployees: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.checkedEmployees = state.companies
          .filter((item) => item.id === state.checkedCompanies[0])[0]
          .employees.map((item) => item.id);
      } else {
        state.checkedEmployees = [];
      }
    },
  },
});

export const {
  addCompany,
  addCheckedCompany,
  removeCheckedCompany,
  checkAllCompanies,
  addEmloyee,
  addCheckedEmployee,
  removeCheckedEmployee,
  checkAllEmployees,
} = masterSlice.actions;

export default masterSlice.reducer;
