import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./Slice/DashboardSlice";
import AddPlantReducer from "./Slice/AddPlantSlice";

export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    addplant: AddPlantReducer,
  },
});
