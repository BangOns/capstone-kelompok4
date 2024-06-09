import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    watering_frequency: 0,
    each: "",
    watering_amount: 0,
    unit: "",
    watering_time: "00:00",
    weather_condition: "",
    condition_description: "",
  },
  PlantCaringInput: {
    additional_tips: "",
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
      if (action.payload.name === "plant_images") {
        state.PlantInformationInput[action.payload.name].push(
          action.payload.value
        );
      }
      if (action.payload.name === "plant_characteristic") {
        state.PlantInformationInput.plant_characteristic[
          action.payload.nameChild
        ] = action.payload.value;
      }
      state.PlantInformationInput[action.payload.name] = action.payload.value;
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
  FuncPlantCaringInput,
  FuncFaQInput,
  FuncPlantCharateristic,
} = AddPlantSlice.actions;
export default AddPlantSlice.reducer;
