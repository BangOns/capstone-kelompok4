import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexStep: 1,
  plantInformationStep2: false,
  cancelAddPlant: false,
  deletePlant: false,
  finishAddPlant: false,
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    PlantInformationStep2: (state, action) => {
      state.plantInformationStep2 = action.payload;
    },
    NextStep: (state) => {
      if (state.indexStep >= 6) {
        state.indexStep = 6;
      } else {
        state.indexStep += 1;
      }
    },
    PrevStep: (state) => {
      if (state.indexStep <= 0) {
        state.indexStep = 1;
      } else {
        state.indexStep -= 1;
      }
    },
    ToIndex: (state, action) => {
      state.indexStep = action.payload;
    },
    CancelAddPlant: (state, action) => {
      state.cancelAddPlant = action.payload;
    },
    DeletePlant: (state, action) => {
      state.deletePlant = action.payload;
    },
    FinishAddPlant: (state, action) => {
      state.finishAddPlant = action.payload;
    },
  },
});

export const {
  PlantInformationStep2,
  NextStep,
  PrevStep,
  ToIndex,
  CancelAddPlant,
  DeletePlant,
  FinishAddPlant,
} = DashboardSlice.actions;

export default DashboardSlice.reducer;
