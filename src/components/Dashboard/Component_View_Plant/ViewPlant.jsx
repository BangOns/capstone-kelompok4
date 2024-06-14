"use client";

import React, { useEffect } from "react";
import Component_Plant_Information from "./Component_Plant_Information";
import Component_Reminder_Settings from "./Component_Reminder_Settings";
import Component_Planting_Steps from "./Component_Planting_Steps";
import Component_Additional_Planting_Tips from "./Component_Additional_Planting_Tips";
import Component_FaQ from "./Component_FaQ";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataPlantsByID } from "../../../libs/redux/Slice/AddPlantSlice";
import Loading_GetDataById from "../../../utils/Component-Loading/Loading_GetDataById";

export default function ViewPlant() {
  const params = useParams();
  const { PlantByIDFullField } = useSelector((state) => state.addplant);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(FetchDataPlantsByID(parseInt(params.id)));
  }, []);
  return (
    <article className="w-full">
      <button
        className="text-emerald-500 hover:text-emerald-600 py-[14px]"
        onClick={() => router.push("/dashboard/manage-plant")}
      >
        Back
      </button>
      {PlantByIDFullField.data ? (
        <>
          <Component_Plant_Information dataPlants={PlantByIDFullField.data} />
          <Component_Reminder_Settings dataPlants={PlantByIDFullField.data} />
          <Component_Planting_Steps dataPlants={PlantByIDFullField.data} />
          <Component_Additional_Planting_Tips
            dataPlants={PlantByIDFullField.data}
          />
          <Component_FaQ dataPlants={PlantByIDFullField.data} />
        </>
      ) : (
        <div className="w-full h-full grid place-items-center">
          <Loading_GetDataById />
        </div>
      )}
    </article>
  );
}
