import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Certain_Weather_Condition() {
  const { dataPlantNewEdit } = useSelector((state) => state.editplant);

  const [watherData, setWatherData] = useState([]);
  const [conditionData, setConditionData] = useState([]);

  useEffect(() => {
    if (
      typeof dataPlantNewEdit?.watering_schedule.weather_condition === "string"
    ) {
      setWatherData(
        dataPlantNewEdit?.watering_schedule.weather_condition.split(",") || []
      );
    } else {
      setWatherData(
        dataPlantNewEdit?.watering_schedule.weather_condition || []
      );
    }
    if (
      typeof dataPlantNewEdit?.watering_schedule.condition_description ===
      "string"
    ) {
      setConditionData(
        dataPlantNewEdit?.watering_schedule.condition_description.split(",") ||
          []
      );
    } else {
      setConditionData(
        dataPlantNewEdit?.watering_schedule.condition_description || []
      );
    }
  }, [dataPlantNewEdit]);

  return (
    <section>
      {watherData.map((condition, index) => (
        <div
          key={index}
          className="w-full pb-3 border-l-0 border-r-0 border-t-0 border-b-2"
        >
          <div className="pb-4">
            <h4 className="font-nunito">If the weather is...</h4>
            <p className="font-nunito-bold">{condition}</p>
          </div>
          <div className="">
            <h4 className="font-nunito">Then...</h4>
            <p className="font-nunito-bold">{conditionData[index]}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
