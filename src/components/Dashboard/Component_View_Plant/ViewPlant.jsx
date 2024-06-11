"use client";

import React from "react";
import Component_Plant_Information from "./Component_Plant_Information";
import Component_Reminder_Settings from "./Component_Reminder_Settings";
import Component_Planting_Steps from "./Component_Planting_Steps";
import Component_Additional_Planting_Tips from "./Component_Additional_Planting_Tips";
import Component_FaQ from "./Component_FaQ";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function ViewPlant() {
  const params = useParams();
  const { DataAllPlants } = useSelector((state) => state.addplant);
  const GetDataPlantsByID = DataAllPlants
    ? DataAllPlants.find((items) => items.id === parseInt(params.id))
    : [];
  const router = useRouter();
  return (
    <article className="w-full">
      <button
        className="text-emerald-500 hover:text-emerald-600 py-[14px]"
        onClick={() => router.push("/dashboard/manage-plant")}
      >
        Back
      </button>
      <Component_Plant_Information dataPlants={GetDataPlantsByID} />
      <Component_Reminder_Settings dataPlants={GetDataPlantsByID} />
      <Component_Planting_Steps dataPlants={GetDataPlantsByID} />
      <Component_Additional_Planting_Tips dataPlants={GetDataPlantsByID} />
      <Component_FaQ dataPlants={GetDataPlantsByID} />
    </article>
  );
}
