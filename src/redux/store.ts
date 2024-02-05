import { configureStore } from "@reduxjs/toolkit";
import masterSlice from "./slices/masterSlice";
export const store = configureStore({
  reducer: {
    master: masterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
