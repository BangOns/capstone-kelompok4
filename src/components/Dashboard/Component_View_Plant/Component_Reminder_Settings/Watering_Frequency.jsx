import React from "react";

export default function Watering_Frequency() {
  return (
    <article>
      <section className="w-full flex pt-4 pb-3 justify-between  border-l-0 border-t-0 border-r-0 border-b-2">
        <p className="font-nunito text-base">Frequency</p>
        <p className="font-nunito-bold text-base">1x each day</p>
      </section>
      <section className="w-full flex py-3 justify-between  border-l-0 border-t-0 border-r-0 border-b-2">
        <p className="font-nunito text-base">Watering Time</p>
        <p className="font-nunito-bold text-base">08:00 AM (Morning)</p>
      </section>
      <section className="w-full flex pt-3 justify-between ">
        <p className="font-nunito text-base">Watering Amount</p>
        <p className="font-nunito-bold text-base">500 milliliter (ml)</p>
      </section>
    </article>
  );
}
