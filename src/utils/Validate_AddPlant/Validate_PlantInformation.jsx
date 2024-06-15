export function ValidateInformation(dataPlant) {
  const filterImage = dataPlant.plant_images.filter(
    (items) => items.is_primary === 1
  );
  if (
    dataPlant.name === "" ||
    dataPlant.description === "" ||
    dataPlant.harvest_duration === "" ||
    dataPlant.climate_condition === "" ||
    dataPlant.sunlight === "" ||
    dataPlant.planting_time === "" ||
    dataPlant.plant_category_id <= 0 ||
    dataPlant.is_toxic === "" ||
    !filterImage.length
  ) {
    return false;
  } else {
    return true;
  }
}
export function ValidateInformation2(dataPlant) {
  if (
    dataPlant.height <= 0 ||
    dataPlant.height_unit === "" ||
    dataPlant.wide <= 0 ||
    dataPlant.wide_unit === "" ||
    dataPlant.leaf_color === ""
  ) {
    return false;
  } else {
    return true;
  }
}
