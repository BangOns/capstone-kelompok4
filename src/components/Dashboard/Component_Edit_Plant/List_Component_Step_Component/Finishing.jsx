import React, { Fragment } from "react";
import Component_Plant_Information from "./Finishing/Component_Plant_Information";
import Component_Reminder_Settings from "./Finishing/Component_Reminder_Settings";
import Component_Planting_Steps from "./Finishing/Component_Planting_Steps";
import Component_Additional_Planting_Tips from "./Finishing/Component_Additional_Planting_Tips";
import Component_FaQ from "./Finishing/Component_FaQ";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import { useDispatch, useSelector } from "react-redux";
import {
  FuncFinishAddPlant,
  FuncMessagePlantError,
  FuncMessagePlantSuccess,
  FuncPrevStep,
} from "../../../../libs/redux/Slice/DashboardSlice";
import Message_Error from "../../../Component_Message/Message_Error";
import { FuncAddNewDataPlants } from "../../../../libs/redux/Slice/AddPlantSlice";

export default function Finishing() {
  const { DataAllPlants, dataPlantNew } = useSelector(
    (state) => state.addplant
  );
  const dispatch = useDispatch();
  function handleClickPrev() {
    dispatch(FuncPrevStep());
  }
  function handleClickNext() {
    if (dataPlantNew) {
      const DataPlantNews = {
        ...dataPlantNew,
        created_at: new Date().toISOString(),
      };
      dispatch(FuncAddNewDataPlants([...DataAllPlants, DataPlantNews]));
      dispatch(FuncFinishAddPlant(true));
    } else {
      dispatch(FuncMessagePlantError(true));
    }
  }
  return (
    <Fragment>
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
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </Fragment>
  );
}
