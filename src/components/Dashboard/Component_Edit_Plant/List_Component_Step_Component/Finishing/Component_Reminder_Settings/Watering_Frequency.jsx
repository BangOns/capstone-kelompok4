import React from "react";
import { useSelector } from "react-redux";

export default function Watering_Frequency() {
  const { dataPlantNewEdit } = useSelector((state) => state.editplant);

  const wateringFrequency =
    dataPlantNewEdit?.watering_schedule.watering_frequency || 0;
  const each = dataPlantNewEdit?.watering_schedule.each || "";
  const wateringTime =
    dataPlantNewEdit?.watering_schedule.watering_time || "N/A";
  const wateringAmount =
    dataPlantNewEdit?.watering_schedule.watering_amount || 0;
  const unit = dataPlantNewEdit?.watering_schedule.unit || "";

  return (
    <article>
      <section className="w-full flex pt-4 pb-3 justify-between  border-l-0 border-t-0 border-r-0 border-b-2">
        <p className="font-nunito text-base">Frequency</p>
        <p className="font-nunito-bold text-base">{`${wateringFrequency} ${each}`}</p>
      </section>
      <section className="w-full flex py-3 justify-between  border-l-0 border-t-0 border-r-0 border-b-2">
        <p className="font-nunito text-base">Watering Time</p>
        <p className="font-nunito-bold text-base">{wateringTime}</p>
      </section>
      <section className="w-full flex pt-3 justify-between ">
        <p className="font-nunito text-base">Watering Amount</p>
        <p className="font-nunito-bold text-base">{`${wateringAmount} ${unit}`}</p>
      </section>
    </article>
  );
}
