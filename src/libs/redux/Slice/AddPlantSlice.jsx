import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PlantInformationInput: {
    plantName: "",
  },
  PlantCaringInput: {
    additionalPlant: "",
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
    FuncPlantCaringInput: (state, action) => {
      state.PlantCaringInput[action.payload.name] = action.payload.value;
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
  FuncAddInputPlantInformation,
  FuncPlantCaringInput,
  FuncFaQInput,
} = AddPlantSlice.actions;
export default AddPlantSlice.reducer;
