import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataPlantEditFullField: {},
  dataPlantEditLoading: false,
  dataPlantEditError: false,

  dataPlantNewEdit: {},
  //
  PostDataMessageSuccessEdit: {},
  PostDataMessageLoadingEdit: false,
  PostDataMessageErrorEdit: false,
};

export const PostDataPlantsEdit = createAsyncThunk(
  "addPlant/PostDataPlantsNew",
  async ({ data, id }, thunkAPI) => {
    try {
      let formData = new FormData();
      // Tambahkan data sederhana
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("plant_category_id", data.plant_category_id);
      formData.append("harvest_duration", data.harvest_duration);
      formData.append("climate_condition", data.climate_condition);
      formData.append("sunlight", data.sunlight);
      formData.append("planting_time", data.planting_time);
      formData.append("is_toxic", data.is_toxic);
      formData.append("additional_tips", data.additional_tips);
      // Tambahkan plant_characteristic
      for (let key in data.plant_characteristic) {
        formData.append(
          `plant_characteristic.${key}`,
          data.plant_characteristic[key]
        );
      }
      // Tambahkan watering_schedule
      for (let key in data.watering_schedule) {
        formData.append(
          `watering_schedule.${key}`,
          data.watering_schedule[key]
        );
      }
      // Fungsi untuk mengkonversi URL blob ke objek File
      async function urlToFile(url, filename, mimeType) {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], filename, { type: mimeType });
      }
      // Tambahkan plant_instructions dengan gambar terkait
      for (let i = 0; i < data.plant_instructions.length; i++) {
        const instruction = data.plant_instructions[i];
        for (let key in instruction) {
          if (key === "step_image_url" && instruction[key]) {
            const file = await urlToFile(
              instruction[key],
              `instruction_image_${i}.png`,
              "image/png"
            );
            formData.append(`plant_instructions.${key}`, file);
          } else {
            formData.append(`plant_instructions.${key}`, instruction[key]);
          }
        }
      }
      // Tambahkan plant_faqs
      for (let i = 0; i < data.plant_faqs.length; i++) {
        const faq = data.plant_faqs[i];
        formData.append(`plant_faqs.question`, faq.question);
        formData.append(`plant_faqs.answer`, faq.answer);
      }
      // Tambahkan plant_images
      for (let i = 0; i < data.plant_images.length; i++) {
        const image = data.plant_images[i];
        const file = await urlToFile(
          image.file_name,
          `image_${i}.png`,
          "image/png"
        );
        formData.append("plant_images", file);
        formData.append("plant_images.is_primary", image.is_primary);
      }
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/plants/${parseInt(id)}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_KEY}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }
);

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
    builder
      .addCase(PostDataPlantsEdit.fulfilled, (state, action) => {
        state.PostDataMessageSuccessEdit = action.payload;
        state.PostDataMessageLoadingEdit = false;
        state.PostDataMessageErrorEdit = false;
      })
      .addCase(PostDataPlantsEdit.pending, (state) => {
        state.PostDataMessageLoadingEdit = true;
        state.PostDataMessageErrorEdit = false;
      })
      .addCase(PostDataPlantsEdit.rejected, (state) => {
        state.PostDataMessageLoadingEdit = false;
        state.PostDataMessageErrorEdit = true;
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
