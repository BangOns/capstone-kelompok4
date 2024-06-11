import { createSlice } from "@reduxjs/toolkit";
import { dataDummyPlant } from "../../../utils/DataDummy";

const initialState = {
  DataAllPlants: [...dataDummyPlant],
  PlantInformationInput: {
    name: "",
    description: "",
    plant_images: [],
    plant_category: {},
    harvest_duration: "",
    climate_condition: "",
    sunlight: "",
    planting_time: "",
    is_toxic: "",
    plant_characteristic: {
      id: 0,
      height: 0,
      height_unit: "",
      wide: 0,
      wide_unit: "",
      leaf_color: "",
    },
  },
  ReminderSettingsInput: {
    watering_schedule: {
      watering_frequency: 0,
      each: "",
      watering_amount: 0,
      unit: "",
      watering_time: "00:00",
      weather_condition: "",
      condition_description: "",
    },
  },
  PlantCaringInput: {
    additional_tips: "",
  },
  FaQInput: {
    answer: "",
    question: "",
  },
  faqList: [],
  PlantingInstructions: [],

  dataPlantNew: {},
};

export const AddPlantSlice = createSlice({
  name: "addPlant",
  initialState,
  reducers: {
    FuncDataAllPlants: (state, action) => {
      state.DataAllPlants = action.payload.value;
    },
    FuncPlantInformationInput: (state, action) => {
      state.PlantInformationInput[action.payload.name] = action.payload.value;
    },
    FuncPlantInformationInputImage: (state, action) => {
      if (!state.PlantInformationInput.plant_images.length) {
        state.PlantInformationInput.plant_images = [action.payload.value];
      } else {
        const findIndex = state.PlantInformationInput.plant_images.findIndex(
          (items) => items.id === action.payload.value.id
        );
        if (findIndex >= 0) {
          state.PlantInformationInput.plant_images[findIndex] =
            action.payload.value;
        } else {
          state.PlantInformationInput.plant_images = [
            ...state.PlantInformationInput.plant_images,
            action.payload.value,
          ];
        }
      }
    },
    FuncDeleteImagePlantInformation: (state, action) => {
      state.PlantInformationInput.plant_images =
        state.PlantInformationInput.plant_images.filter(
          (items) => items.id !== action.payload.id
        );
    },
    FuncDeleteImagePreviousPlantInformation: (state, action) => {
      state.PlantInformationInput.plant_images = [];
      state.dataPlantNew.plant_images = [];
    },
    FuncPlantCharateristic: (state, action) => {
      if (action.payload.operatorHeight === "plus") {
        state.PlantInformationInput.plant_characteristic.height += 1;
      } else if (action.payload.operatorHeight === "minus") {
        if (state.PlantInformationInput.plant_characteristic.height <= 0) {
          state.PlantInformationInput.plant_characteristic.height = 0;
        } else {
          state.PlantInformationInput.plant_characteristic.height -= 1;
        }
      }
      if (action.payload.operatorWide === "plus") {
        state.PlantInformationInput.plant_characteristic.wide += 1;
      } else if (action.payload.operatorWide === "minus") {
        if (state.PlantInformationInput.plant_characteristic.wide <= 0) {
          state.PlantInformationInput.plant_characteristic.wide = 0;
        } else {
          state.PlantInformationInput.plant_characteristic.wide -= 1;
        }
      }
      state.PlantInformationInput.plant_characteristic[action.payload.name] =
        action.payload.value;
    },
    FuncPlantCaringInput: (state, action) => {
      state.PlantCaringInput[action.payload.name] = action.payload.value;
    },

    FuncReminderSettingsInput: (state, action) => {
      const { operator } = action.payload;
      switch (operator) {
        case "plus":
          state.ReminderSettingsInput.watering_schedule[action.payload.name] =
            state.ReminderSettingsInput.watering_schedule[action.payload.name] +
            1;
          break;
        case "minus":
          if (
            state.ReminderSettingsInput.watering_schedule[action.payload.name] >
            0
          ) {
            state.ReminderSettingsInput.watering_schedule[action.payload.name] =
              state.ReminderSettingsInput.watering_schedule[
                action.payload.name
              ] - 1;
          }
          break;
        default:
          state.ReminderSettingsInput.watering_schedule[action.payload.name] =
            action.payload.value;
          break;
      }
    },
    FuncFaQInput: (state, action) => {
      state.FaQInput[action.payload.name] = action.payload.value;
    },
    FuncAddFAQList: (state, action) => {
      state.faqList = action.payload;
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
  FuncDataAllPlants,
  FuncPlantInformationInput,
  FuncPlantInformationInputImage,
  FuncReminderSettingsInput,
  FuncAddInputPlantInformation,
  FuncDeleteImagePlantInformation,
  FuncPlantCaringInput,
  FuncFaQInput,
  FuncAddFAQList,
  FuncPlantCharateristic,
  FuncPlantingInstructions,
  FuncDeleteImagePreviousPlantInformation,
} = AddPlantSlice.actions;
export default AddPlantSlice.reducer;
