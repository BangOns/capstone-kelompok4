"use client";
import React, { useEffect, useState } from "react";
import Planting_Instructions from "./List_Component_Step_Component/Planting_Instructions";
import Plant_Infromation from "./List_Component_Step_Component/Plant_Infromation";
import Reminder_Settings from "./List_Component_Step_Component/Reminder_Settings";
import Plant_Caring from "./List_Component_Step_Component/Plant_Caring";
import Faq from "./List_Component_Step_Component/FaQ";
import Finishing from "./List_Component_Step_Component/Finishing";
import { AddPlantsProvider } from "@/hook/add-plants-providers";
import axios from "axios";
import { useParams } from "next/navigation";
import {
  FetchDataPlantsEditByID,
  FuncStoreReminderSettingsEdit,
} from "../../../libs/redux/Slice/EditPlantSlice";
import { useDispatch, useSelector } from "react-redux";
import { EditPlantsProvider } from "../../../hook/edit-plants-providers";

export default function List_Component_Step({ pages }) {
  const { dataPlantEditFullField } = useSelector((state) => state.editplant);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(FetchDataPlantsEditByID(parseInt(params.id)));
  }, []);

  useEffect(() => {
    dispatch(
      FuncStoreReminderSettingsEdit({
        each: dataPlantEditFullField?.data?.watering_schedule.each,
        unit: dataPlantEditFullField?.data?.watering_schedule.unit,
        watering_amount:
          dataPlantEditFullField?.data?.watering_schedule.watering_amount,
        watering_frequency:
          dataPlantEditFullField?.data?.watering_schedule.watering_frequency,
        watering_time:
          dataPlantEditFullField?.data?.watering_schedule.watering_time,
        weather_condition:
          dataPlantEditFullField?.data?.watering_schedule.weather_condition.split(
            ","
          ),
        condition_description:
          dataPlantEditFullField?.data?.watering_schedule.condition_description.split(
            ","
          ),
      })
    );
  }, [dataPlantEditFullField]);

  return (
    <EditPlantsProvider>
      {pages === 1 && (
        <Plant_Infromation DataPlantEdit={dataPlantEditFullField} />
      )}
      {pages === 2 && <Reminder_Settings />}
      {pages === 3 && (
        <Planting_Instructions DataPlantEdit={dataPlantEditFullField} />
      )}
      {pages === 4 && <Plant_Caring DataPlantEdit={dataPlantEditFullField} />}
      {pages === 5 && <Faq DataPlantEdit={dataPlantEditFullField} />}
      {pages === 6 && <Finishing DataPlantEdit={dataPlantEditFullField} />}
    </EditPlantsProvider>
  );
}
