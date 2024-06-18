import React from "react";

import Component_Steps from "./Component_Planting_Steps/Component_Steps";

export default function Component_Planting_Steps({ dataPlants }) {
  const SortStep =
    dataPlants.plant_instructions &&
    [...dataPlants.plant_instructions].sort(
      (a, b) =>
        a.instruction_category.step_number - b.instruction_category.step_number
    );
  return (
    <section className="w-full mt-6 text-black">
      <header className="w-full py-[12.5px] flex justify-between">
        <h1 className="font-nunito-bold text-xl">Planting Steps</h1>
      </header>
      <article className="w-11/12">
        {SortStep ? (
          SortStep?.map((items, i) => (
            <Component_Steps dataPlantsStep={items} key={i} />
          ))
        ) : (
          <div className="w-full p-4">
            <p className="font-nunito-bold  text-3xl">No Step</p>
          </div>
        )}
      </article>
    </section>
  );
}
