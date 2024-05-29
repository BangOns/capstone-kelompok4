import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexStep: 1,
  plantInformationStep2: false,
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
  },
});

export const { PlantInformationStep2, NextStep, PrevStep } =
  DashboardSlice.actions;

export default DashboardSlice.reducer;
