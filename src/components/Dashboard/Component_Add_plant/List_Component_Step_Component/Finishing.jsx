import React from "react";
import Component_Plant_Information from "./Finishing/Component_Plant_Information";
import Component_Reminder_Settings from "./Finishing/Component_Reminder_Settings";
import Component_Planting_Steps from "./Finishing/Component_Planting_Steps";
import Component_Additional_Planting_Tips from "./Finishing/Component_Additional_Planting_Tips";
import Component_FaQ from "./Finishing/Component_FaQ";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import { useDispatch } from "react-redux";
import {
  NextStep,
  PrevStep,
} from "../../../../libs/redux/Slice/DashboardSlice";

export default function Finishing() {
  const dispatch = useDispatch();
  function handleClickPrev() {
    dispatch(PrevStep());
  }
  function handleClickNext() {
    dispatch(NextStep());
  }
  return (
    <article className="w-full mt-6 ">
      <Component_Plant_Information />
      <Component_Reminder_Settings />
      <Component_Planting_Steps />
      <Component_Additional_Planting_Tips />
      <Component_FaQ />
      <div className="flex justify-between mt-10">
        <CancelButtonPlant />
        <div className=" flex">
          <PreviousButtonPlant
            handleClick={handleClickPrev}
            disableOn={false}
          />
          <NextButtonPlant disabledOn={false} handleClick={handleClickNext} />
        </div>
      </div>
    </article>
  );
}
