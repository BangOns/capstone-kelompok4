import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexStep: 1,
  plantInformationStep2: false,
  cancelAddPlant: false,
  deletePlant: false,
  finishAddPlant: false,
  messagePlantSuccess: false,
  messagePlantError: false,
  messagePlantDelete: false,
  data: {},
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    FuncPlantInformationStep2: (state, action) => {
      state.plantInformationStep2 = action.payload;
    },
    FuncNextStep: (state) => {
      if (state.indexStep >= 6) {
        state.indexStep = 6;
      } else {
        state.indexStep += 1;
      }
    },
    FuncPrevStep: (state) => {
      if (state.indexStep <= 0) {
        state.indexStep = 1;
      } else {
        state.indexStep -= 1;
      }
    },
    FuncToIndex: (state, action) => {
      state.indexStep = action.payload;
    },
    FuncCancelAddPlant: (state, action) => {
      state.cancelAddPlant = action.payload;
    },
    FuncDeletePlant: (state, action) => {
      state.deletePlant = action.payload;
    },
    FuncFinishAddPlant: (state, action) => {
      state.finishAddPlant = action.payload;
    },
    FuncMessagePlantSuccess: (state, action) => {
      state.messagePlantSuccess = action.payload;
    },
    FuncMessagePlantError: (state, action) => {
      state.messagePlantError = action.payload;
    },
    FuncMessagePlantDelete: (state, action) => {
      state.messagePlantDelete = action.payload;
    },
    FuncReminderSettings: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  FuncPlantInformationStep2,
  FuncNextStep,
  FuncPrevStep,
  FuncToIndex,
  FuncCancelAddPlant,
  FuncDeletePlant,
  FuncFinishAddPlant,
  FuncMessagePlantSuccess,
  FuncMessagePlantError,
  FuncMessagePlantDelete,
  FuncReminderSettings,
} = DashboardSlice.actions;

export default DashboardSlice.reducer;
