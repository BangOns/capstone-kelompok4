import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataPlantEdit: {},
};

export const EditPlantSlice = createSlice({
  name: "editPlant",
  initialState,
  reducers: {
    FuncPlantInformationInputEdit: (state, action) => {
      if (action.payload.name === "plant_images") {
        state.dataPlantEdit[action.payload.name].push(action.payload.value);
      }
      if (action.payload.name === "plant_characteristic") {
        state.dataPlantEdit.plant_characteristic[action.payload.nameChild] =
          action.payload.value;
      }
      state.dataPlantEdit[action.payload.name] = action.payload.value;
    },
    FuncPlantCharateristicEdit: (state, action) => {
      if (action.payload.operatorHeight === "plus") {
        state.dataPlantEdit.plant_characteristic.height += 1;
      } else if (action.payload.operatorHeight === "minus") {
        if (state.dataPlantEdit.plant_characteristic.height <= 0) {
          state.dataPlantEdit.plant_characteristic.height = 0;
        } else {
          state.dataPlantEdit.plant_characteristic.height -= 1;
        }
      }
      if (action.payload.operatorWide === "plus") {
        state.dataPlantEdit.plant_characteristic.wide += 1;
      } else if (action.payload.operatorWide === "minus") {
        if (state.dataPlantEdit.plant_characteristic.wide <= 0) {
          state.dataPlantEdit.plant_characteristic.wide = 0;
        } else {
          state.dataPlantEdit.plant_characteristic.wide -= 1;
        }
      }
      state.dataPlantEdit.plant_characteristic[action.payload.name] =
        action.payload.value;
    },
    FuncPlantCaringInputEdit: (state, action) => {
      state.dataPlantEdit[action.payload.name] = action.payload.value;
    },

    FuncReminderSettingsInputEdit: (state, action) => {
      const { operator } = action.payload;
      switch (operator) {
        case "plus":
          state.dataPlantEdit.watering_schedule[action.payload.name] =
            state.dataPlantEdit.watering_schedule[action.payload.name] + 1;
          break;
        case "minus":
          if (state.dataPlantEdit.watering_schedule[action.payload.name] > 0) {
            state.dataPlantEdit.watering_schedule[action.payload.name] =
              state.dataPlantEdit.watering_schedule[action.payload.name] - 1;
          }
          break;
        default:
          state.dataPlantEdit.watering_schedule[action.payload.name] =
            action.payload.value;
          break;
      }
    },
    FuncFaQInputEdit: (state, action) => {
      state.dataPlantEdit[action.payload.name] = action.payload.value;
    },
    FuncEditFAQList: (state, action) => {
      state.dataPlantEdit.faq_plants = action.payload;
    },
    FuncEditInputPlantInformation: (state, action) => {
      state.dataPlantEdit = action.payload;
    },
    FuncPlantingInstructionsEdit: (state, action) => {
      state.dataPlantEdit[action.payload.name] = action.payload;
    },
    FuncDeleteImagePlantInformationEdit: (state, action) => {
      state.dataPlantEdit.plant_images =
        state.dataPlantEdit.plant_images.filter(
          (items) => items.file_name !== action.payload.filename
        );
    },
    FuncPlantInformationInputImageEdit: (state, action) => {
      if (!state.dataPlantEdit.plant_images.length) {
        state.dataPlantEdit.plant_images = [action.payload.value];
      } else {
        const findIndex = state.dataPlantEdit.plant_images.findIndex(
          (items) => items.file_name === action.payload.imagePrev
        );
        if (findIndex >= 0) {
          state.dataPlantEdit.plant_images[findIndex] =
            action.payload.value;
        } else {
          state.dataPlantEdit.plant_images = [
            ...state.dataPlantEdit.plant_images,
            action.payload.value,
          ];
        }
      }
    },
  },
});

export const {
  FuncPlantInformationInputEdit,
  FuncPlantCharateristicEdit,
  FuncPlantCaringInputEdit,
  FuncReminderSettingsInputEdit,
  FuncFaQInputEdit,
  FuncEditFAQList,
  FuncEditInputPlantInformation,
  FuncPlantingInstructionsEdit,
  FuncEditDataPlants,
  FuncDeleteImagePlantInformationEdit,
  FuncPlantInformationInputImageEdit,
} = EditPlantSlice.actions;
export default EditPlantSlice.reducer;
