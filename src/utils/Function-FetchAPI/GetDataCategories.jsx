import axios from "axios";

export async function getPlantCategories(cb) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants/categories`
    );
    console.log(response);
    cb(response.data.data);
  } catch (error) {
    cb(error);
  }
}

export async function GetPlantCAtegoriesById(id, cb) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants/categories/${id}`
    );
    cb(response.data.data);
  } catch (error) {
    cb(error);
  }
}
