import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataPlantEditFullField: {},
  dataPlantEditLoading: false,
  dataPlantEditError: false,

  dataPlantNewEdit: {},
};

export const FetchDataPlantsEditByID = createAsyncThunk(
  "editPlant/FetchDataPlantsByID",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return new Error(error);
    }
  }
);

export const EditPlantSlice = createSlice({
  name: "editPlant",
  initialState,
  reducers: {
    FuncPlantInformationInputEdit: (state, action) => {
      if (action.payload.name === "plant_images") {
        state.dataPlantNewEdit[action.payload.name].push(action.payload.value);
      }
      if (action.payload.name === "plant_characteristic") {
        state.dataPlantNewEdit.plant_characteristic = action.payload.value;
      }
      state.dataPlantNewEdit[action.payload.name] = action.payload.value;
    },
    FuncPlantCharateristicEdit: (state, action) => {
      if (action.payload.operatorHeight === "plus") {
        state.dataPlantNewEdit.plant_characteristic.height += 1;
      } else if (action.payload.operatorHeight === "minus") {
        if (state.dataPlantNewEdit.plant_characteristic.height <= 0) {
          state.dataPlantNewEdit.plant_characteristic.height = 0;
        } else {
          state.dataPlantNewEdit.plant_characteristic.height -= 1;
        }
      }
      if (action.payload.operatorWide === "plus") {
        state.dataPlantNewEdit.plant_characteristic.wide += 1;
      } else if (action.payload.operatorWide === "minus") {
        if (state.dataPlantNewEdit.plant_characteristic.wide <= 0) {
          state.dataPlantNewEdit.plant_characteristic.wide = 0;
        } else {
          state.dataPlantNewEdit.plant_characteristic.wide -= 1;
        }
      }
      state.dataPlantNewEdit.plant_characteristic[action.payload.name] =
        action.payload.value;
    },
    FuncPlantCaringInputEdit: (state, action) => {
      state.dataPlantNewEdit[action.payload.name] = action.payload.value;
    },

    FuncReminderSettingsInputEdit: (state, action) => {
      if (action.payload.operator === "plus") {
        state.dataPlantNewEdit.watering_schedule[action.payload.name] += 1;
      } else if (action.payload.operator === "minus") {
        if (
          state.dataPlantNewEdit.watering_schedule[action.payload.name] <= 0
        ) {
          state.dataPlantNewEdit.watering_schedule[action.payload.name] = 0;
        } else {
          state.dataPlantNewEdit.watering_schedule[action.payload.name] -= 1;
        }
      } else {
        state.dataPlantNewEdit.watering_schedule[action.payload.name] =
          action.payload.value;
      }
    },
    FuncStoreReminderSettingsEdit: (state, action) => {
      state.dataPlantNewEdit.watering_schedule = action.payload;
    },
    FuncFaQInputEdit: (state, action) => {
      state.dataPlantNewEdit[action.payload.name] = action.payload.value;
      state.dataPlantEdit[action.payload.name] = action.payload.value;
    },
    FuncEditFAQList: (state, action) => {
      state.dataPlantNewEdit.faq_plants = action.payload;
      state.dataPlantEdit.faq_plants = action.payload;
    },
    FuncEditInputPlantInformation: (state, action) => {
      state.dataPlantNewEdit = action.payload;
    },
    FuncPlantingInstructionsEdit: (state, action) => {
      state.dataPlantNewEdit[action.payload.name] = action.payload.value;
    },
    FuncDeleteImagePlantInformationEdit: (state, action) => {
      state.dataPlantNewEdit.plant_images =
        state.dataPlantNewEdit.plant_images.filter(
          (items) => items.file_name !== action.payload.filename
        );
    },
    FuncPlantInformationInputImageEdit: (state, action) => {
      if (state.dataPlantEditFullField.data) {
        if (!state.dataPlantNewEdit.plant_images) {
          state.dataPlantNewEdit.plant_images = action.payload.value;
        } else if (action.payload.imagePrev) {
          const findIndex = state.dataPlantNewEdit.plant_images.findIndex(
            (items) => items.file_name === action.payload.imagePrev
          );
          if (findIndex >= 0) {
            state.dataPlantNewEdit.plant_images[findIndex] =
              action.payload.value;
          } else {
            state.dataPlantNewEdit.plant_images = [
              ...state.dataPlantNewEdit.plant_images,
              action.payload.value,
            ];
          }
        } else if (action.payload.imagePrev === "") {
          state.dataPlantNewEdit.plant_images = [
            ...state.dataPlantNewEdit.plant_images,
            action.payload.value,
          ];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchDataPlantsEditByID.fulfilled, (state, action) => {
        state.dataPlantEditFullField = action.payload;
        state.dataPlantEditLoading = false;
        state.dataPlantEditError = false;
      })
      .addCase(FetchDataPlantsEditByID.pending, (state) => {
        state.dataPlantEditLoading = true;
        state.dataPlantEditError = false;
      })
      .addCase(FetchDataPlantsEditByID.rejected, (state) => {
        state.dataPlantEditLoading = false;
        state.dataPlantEditError = true;
      });
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
  FuncStoreReminderSettingsEdit,
} = EditPlantSlice.actions;
export default EditPlantSlice.reducer;
