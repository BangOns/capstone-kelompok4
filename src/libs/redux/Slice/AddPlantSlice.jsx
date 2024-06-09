import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PlantInformationInput: {
    plantName: "",
  },
  PlantCaringInput: {
    reachText: "",
  },
  FaQInput: {
    asked: "",
  },
  dataPlantNew: {},
  PlantingInstructions: [],
};

export const AddPlantSlice = createSlice({
  name: "addPlant",
  initialState,
  reducers: {
    FuncPlantInformationInput: (state, action) => {
      state.PlantInformationInput[action.payload.name] = action.payload.value;
    },
    FuncFaQInput: (state, action) => {
      state.FaQInput[action.payload.name] = action.payload.value;
    },
    FuncAddInputPlantInformation: (state, action) => {
      state.dataPlantNew = action.payload;
    },
    FuncPlantingInstructions: (state, action) => {
      state.PlantingInstructions = action.payload;
    },
  },
});

export const {
  FuncPlantInformationInput,
  FuncAddInputPlantInformation,
  FuncFaQInput,
  FuncPlantingInstructions,
} = AddPlantSlice.actions;
export default AddPlantSlice.reducer;
