import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
  checkedCompanies: [],
  checkedEmployees: [],
};

export const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      state.companies = action.payload;
    },
    addEmloyee: (state, action) => {
      state.companies = action.payload;
    },
    setCheckedCompanies: (state, action) => {
      state.checkedCompanies = action.payload;
    },
    setCheckedEmployees: (state, action) => {
      state.checkedEmployees = action.payload;
    },
  },
});

export const {
  addCompany,
  addEmloyee,
  setCheckedCompanies,
  setCheckedEmployees,
} = masterSlice.actions;

export default masterSlice.reducer;
