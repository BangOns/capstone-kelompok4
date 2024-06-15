import React from "react";
import { useSelector } from "react-redux";

export default function Certain_Weather_Condition() {
  const { dataPlantNew } = useSelector((state) => state.addplant);

  const weatherCondition =
    dataPlantNew?.watering_schedule.weather_condition.split(",") || [];
  const conditionDescription =
    dataPlantNew?.watering_schedule.condition_description.split(",") || [];

  return (
    <section>
      {weatherCondition.map((condition, index) => (
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
            <p className="font-nunito-bold">{conditionDescription[index]}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
