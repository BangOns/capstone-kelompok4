import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataDummyPlant } from "../../../utils/DataDummy";
import axios from "axios";

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
  //Get ALl Plant Data
  DataPlantAllFullField: {},
  DataPlantAllLoading: false,
  DataPlantAllError: false,
  // Post data Plant New
  PostDataMessageSuccess: {},
  PostDataMessageLoading: false,
  PostDataMessageError: false,

  // Get data By ID
  PlantByIDFullField: {},
  PlantByIDLoading: false,
  PlantByIDError: false,
};

export const FetchDataAllPlants = createAsyncThunk(
  "addPlant/FetchDataAllPlants",
  async (index, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants?page=${index}&limit=10`,
        {
          method: "GET",
        }
      );
      const datas = await response.json();
      return datas.data;
    } catch (error) {
      return new Error(error);
    }
  }
);

export const PostDataPlantsNew = createAsyncThunk(
  "addPlant/PostDataPlantsNew",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (typeof data[key] === "object" && data[key] !== null) {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/plants`,
        data,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_KEY}`,
          },
        }
      );
      console.log(response.data);

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
    builder
      .addCase(FetchDataAllPlants.fulfilled, (state, action) => {
        state.DataPlantAllFullField = action.payload;
        state.DataPlantAllLoading = false;
        state.DataPlantAllError = false;
      })
      .addCase(FetchDataAllPlants.pending, (state) => {
        state.DataPlantAllLoading = true;
        state.DataPlantAllError = false;
      })
      .addCase(FetchDataAllPlants.rejected, (state) => {
        state.DataPlantAllLoading = false;
        state.DataPlantAllError = true;
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
