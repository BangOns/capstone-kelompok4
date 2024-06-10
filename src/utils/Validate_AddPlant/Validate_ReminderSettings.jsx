export function ValidateReminderSettings(dataPlant) {
  if (
    dataPlant.watering_frequency === 0 ||
    dataPlant.each === "" ||
    dataPlant.watering_amount === 0 ||
    dataPlant.unit === "" ||
    dataPlant.watering_time === "00:00" ||
    dataPlant.weather_condition === "" ||
    dataPlant.condition_description === ""
  ) {
    return false;
  } else {
    return true;
  }
}
