import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PlantInformationInput: {
    plantName: "",
  },
  ReminderSettingsInput: {
    frequency: 0,
    amount: 0,
    each: "",
    unit: "",
    time: "00:00",
    openEach: false,
    openUnit: false,
  },
  PlantCaringInput: {
    reachText: "",
  },
  FaQInput: {
    asked: "",
  },
  dataPlantNew: {},
};

export const AddPlantSlice = createSlice({
  name: "addPlant",
  initialState,
  reducers: {
    FuncPlantInformationInput: (state, action) => {
      state.PlantInformationInput[action.payload.name] = action.payload.value;
    },
    FuncReminderSettingsInput: (state, action) => {
      const { operator } = action.payload;
      if (operator === "plus") {
        state.ReminderSettingsInput[action.payload.name] += 1;
      } else if (operator === "minus") {
        state.ReminderSettingsInput[action.payload.name] -= 1;
      } else {
        state.ReminderSettingsInput[action.payload.name] = action.payload.value;
      }
    },
    FuncFaQInput: (state, action) => {
      state.FaQInput[action.payload.name] = action.payload.value;
    },
    FuncAddInputPlantInformation: (state, action) => {
      state.dataPlantNew = action.payload;
    },
  },
});

export const {
  FuncPlantInformationInput,
  FuncReminderSettingsInput,
  FuncAddInputPlantInformation,
  FuncFaQInput,
} = AddPlantSlice.actions;
export default AddPlantSlice.reducer;
