import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./Slice/DashboardSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
  },
});
