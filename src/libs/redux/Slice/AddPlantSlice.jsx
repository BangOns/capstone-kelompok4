import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  PlantInformationInput: {
    name: "",
    description: "",
    plant_images: [],
    plant_category_id: 0,
    harvest_duration: "",
    climate_condition: "",
    sunlight: "",
    planting_time: "",
    is_toxic: "",
    plant_characteristic: {
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

  // Post data Plant New
  PostDataMessageSuccess: {},
  PostDataMessageLoading: false,
  PostDataMessageError: false,

  // Get data By ID
  PlantByIDFullField: {},
  PlantByIDLoading: false,
  PlantByIDError: false,
};

export const PostDataPlantsNew = createAsyncThunk(
  "addPlant/PostDataPlantsNew",
  async ({ data }, thunkAPI) => {
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/plants`,
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

export const FetchDataPlantsByID = createAsyncThunk(
  "addPlant/FetchDataPlantsByID",
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
          (items) => items.file_name === action.payload.imagePrev
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
          (items) => items.file_name !== action.payload.filename
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
      if (
        state.PlantInformationInput.plant_characteristic.hasOwnProperty([
          action.payload.name,
        ])
      ) {
        state.PlantInformationInput.plant_characteristic[action.payload.name] =
          action.payload.value;
      }
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
    FuncAddNewDataPlants: (state, action) => {
      state.DataAllPlants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchDataPlantsByID.fulfilled, (state, action) => {
        state.PlantByIDFullField = action.payload;
        state.PlantByIDLoading = false;
        state.PlantByIDError = false;
      })
      .addCase(FetchDataPlantsByID.pending, (state) => {
        state.PlantByIDLoading = true;
        state.PlantByIDError = false;
      })
      .addCase(FetchDataPlantsByID.rejected, (state) => {
        state.PlantByIDLoading = false;
        state.PlantByIDError = true;
      });
    builder
      .addCase(PostDataPlantsNew.fulfilled, (state, action) => {
        state.PostDataMessageSuccess = action.payload;
        state.PostDataMessageLoading = false;
        state.PostDataMessageError = false;
      })
      .addCase(PostDataPlantsNew.pending, (state) => {
        state.PostDataMessageLoading = true;
        state.PostDataMessageError = false;
      })
      .addCase(PostDataPlantsNew.rejected, (state) => {
        state.PostDataMessageLoading = false;
        state.PostDataMessageError = true;
      });
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
  FuncAddNewDataPlants,
} = AddPlantSlice.actions;
export default AddPlantSlice.reducer;
