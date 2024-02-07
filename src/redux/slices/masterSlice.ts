import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICompanies, ICompany, IEmployee } from "../../interfaces/interfaces";
import { companies } from "../../MOCK/companies";

type TState = {
  companies: ICompanies;
  checkedCompanies: string[];
  checkedEmployees: string[];
  isCompanyAdding: boolean;
  isEmployeeAdding: boolean;
  editingCompanyId: string | null;
  editingEmployeeId: string | null;
};

const initialState: TState = {
  companies: companies,
  checkedCompanies: [],
  checkedEmployees: [],
  isCompanyAdding: false,
  isEmployeeAdding: false,
  editingCompanyId: null,
  editingEmployeeId: null,
};

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    // добавление компании
    addCompany: (state, action: PayloadAction<ICompany>) => {
      state.companies.unshift(action.payload);
      state.checkedEmployees = [];
      state.checkedCompanies = [];
    },
    // удаление компании
    deleteCompany: (state, action: PayloadAction<string>) => {
      state.companies = state.companies.filter(
        (item) => item.id !== action.payload
      );
      state.checkedEmployees = [];
      state.checkedCompanies = [];
    },
    // удаление списка компаний
    deleteCompanies: (state) => {
      state.companies = state.companies.filter(
        (item) => !state.checkedCompanies.includes(item.id)
      );
      state.checkedEmployees = [];
      state.checkedCompanies = [];
    },
    // отображение инпута добавления компании
    setIsCompanyAdding: (state) => {
      state.isCompanyAdding = !state.isCompanyAdding;
      state.editingCompanyId = null;
    },
    // выбор компании
    addCheckedCompany: (state, action: PayloadAction<string>) => {
      state.checkedCompanies.push(action.payload);
      state.checkedEmployees = [];
    },
    // выбор компании для редактирвания
    setEditingCompany: (state, action: PayloadAction<string | null>) => {
      state.editingCompanyId = action.payload;
      if (state.isCompanyAdding) {
        state.isCompanyAdding = false;
      }
    },
    // сохранить изменения компании
    saveCompany: (state, action: PayloadAction<ICompany>) => {
      state.companies = state.companies.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      state.checkedEmployees = [];
      state.checkedCompanies = [];
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
    addEmloyee: (state, action: PayloadAction<IEmployee>) => {
      const index: number = state.companies.findIndex(
        (item) => (item.id = state.checkedCompanies[0])
      );
      state.companies[index].employees.unshift(action.payload);
      state.checkedEmployees = [];
    },
    // отображение инпута добавления сотрудника
    setIsEmployeeAdding: (state) => {
      state.isEmployeeAdding = !state.isEmployeeAdding;
    },
    // выбор сотрудника
    addCheckedEmployee: (state, action: PayloadAction<string>) => {
      state.checkedEmployees.push(action.payload);
    },
    // выбор сотрудника для редактирвания
    setEditingEmployee: (state, action: PayloadAction<string | null>) => {
      state.editingEmployeeId = action.payload;
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
  deleteCompany,
  deleteCompanies,
  setIsCompanyAdding,
  addCheckedCompany,
  setEditingCompany,
  saveCompany,
  removeCheckedCompany,
  checkAllCompanies,
  addEmloyee,
  setIsEmployeeAdding,
  setEditingEmployee,
  addCheckedEmployee,
  removeCheckedEmployee,
  checkAllEmployees,
} = masterSlice.actions;

export default masterSlice.reducer;
