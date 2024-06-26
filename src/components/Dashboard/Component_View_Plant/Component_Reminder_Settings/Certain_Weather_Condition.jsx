import React from "react";

export default function Certain_Weather_Condition({ dataPlants }) {
  const weatherCondition =
    dataPlants?.watering_schedule.weather_condition.split(",") || [];
  const conditionDescription =
    dataPlants?.watering_schedule.condition_description.split(",") || [];
  return (
    <section>
      {dataPlants.watering_schedule.weather_condition ? (
        weatherCondition.map((condition, index) => (
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
        ))
      ) : (
        <div className="w-full pb-3 border-l-0 border-r-0 border-t-0 border-b-2">
          <div className="pb-4">
            <h4 className="font-nunito">If the weather is...</h4>
            <p className="font-nunito-bold">No weather conditions</p>
          </div>
          <div className="">
            <h4 className="font-nunito">Then...</h4>
            <p className="font-nunito-bold">No Conditions</p>
          </div>
        </div>
      )}
    </section>
  );
}
