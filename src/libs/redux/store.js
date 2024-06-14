import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./Slice/DashboardSlice";
import AddPlantReducer from "./Slice/AddPlantSlice";
import EditPlantReducer from "./Slice/EditPlantSlice";

export const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    addplant: AddPlantReducer,
    editplant: EditPlantReducer,
  },
});
