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
    },
    // выбор компании
    addCheckedCompany: (state, action: PayloadAction<string>) => {
      state.checkedCompanies.push(action.payload);
    },
    // отмена выбора компании
    removeCheckedCompany: (state, action: PayloadAction<string>) => {
      state.checkedCompanies = state.checkedCompanies.filter(
        (item) => item !== action.payload
      );
    },
    // выбрать/отменить все компании
    checkAllCompanies: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.checkedCompanies = state.companies.map((item) => item.id);
      } else {
        state.checkedCompanies = [];
      }
    },
    // добавление сотрудника
    addEmloyee: (state, action) => {
      state.companies = action.payload;
    },
    // выбор сотрудника
    setCheckedEmployees: (state, action) => {
      state.checkedEmployees = action.payload;
    },
    // выбрать/отменить всех сотрудников компании
    checkAllEmployees: (state, action: PayloadAction<boolean, string>) => {
      state.checkedEmployees = state.checkedEmployees;
    },
  },
});

export const {
  addCompany,
  addCheckedCompany,
  removeCheckedCompany,
  checkAllCompanies,
  addEmloyee,
  setCheckedEmployees,
  checkAllEmployees,
} = masterSlice.actions;

export default masterSlice.reducer;
