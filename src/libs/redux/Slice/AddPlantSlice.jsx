import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PlantInformationInput: {
    plantName: "",
  },
  ReminderSettingsInput: {
    watering_frequency: 0,
    each: "",
    watering_amount: 0,
    unit: "",
    watering_time: "00:00",
    weather_condition: "",
    condition_description: "",
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
      switch (operator) {
        case "plus":
          state.ReminderSettingsInput[action.payload.name] =
            state.ReminderSettingsInput[action.payload.name] + 1;
          break;
        case "minus":
          if (state.ReminderSettingsInput[action.payload.name] > 0) {
            state.ReminderSettingsInput[action.payload.name] =
              state.ReminderSettingsInput[action.payload.name] - 1;
          }
          break;
        default:
          state.ReminderSettingsInput[action.payload.name] =
            action.payload.value;
          break;
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
