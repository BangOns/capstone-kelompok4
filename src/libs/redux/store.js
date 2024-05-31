import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./Slice/DashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
  },
});
