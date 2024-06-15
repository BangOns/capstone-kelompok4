"use client";
import React from "react";
import CancelButtonPlant from "../../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../../Component_Buttons/next_buton_plant";

import { useDispatch, useSelector } from "react-redux";
import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncPlantInformationStep2,
} from "../../../../../libs/redux/Slice/DashboardSlice";
import Message_Error from "../../../../Component_Message/Message_Error";
import Leaf_Color from "./Select_Option/Leaf_Color";
import Unit from "./Select_Option/Unit";
import Each from "./Select_Option/Each";
import Plant_Height from "./Plant_Information_Step2/Plant_Height";
import Plant_Wide from "./Plant_Information_Step2/Plant_Wide";
import Data_Plant_Information_Step1 from "./Plant_Information_Step2/Data_Plant_Information_Step1";
// import { FuncAddInputPlantInformation } from "../../../../../libs/redux/Slice/AddPlantSlice";
import { FuncEditInputPlantInformation } from "../../../../../libs/redux/Slice/EditPlantSlice";
import { ValidateInformation2 } from "../../../../../utils/Validate_AddPlant/Validate_PlantInformation";
export default function Plant_Information_Step2() {
  const { PlantInformationInputEdit, dataPlantEdit } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  function handleClickNext() {
    const checkValidatePlantInformation2 = ValidateInformation2(
      PlantInformationInputEdit.plant_characteristic
    );
    if (!checkValidatePlantInformation2) {
      dispatch(FuncMessagePlantError(true));
    } else {
      const dataPlantInformation2 = {
        ...PlantInformationInputEdit,
      };
      dispatch(
        FuncEditInputPlantInformation({
          ...dataPlantEdit,
          ...dataPlantInformation2,
        })
      );
      dispatch(FuncNextStep());
    }
  }
  function handleClickPrev() {
    dispatch(FuncPlantInformationStep2(false));
  }
  return (
    <>
      <article className="mt-6  ">
        <header className="">
          <h1 className="font-nunito-bold text-xl">Plant Information</h1>
        </header>
        <Data_Plant_Information_Step1 />
        <section className="mt-4 ">
          <header className="mb-3">
            <h1 className="font-nunito-bold text-[20px]">
              Plant Charateristic
            </h1>
          </header>
          <form className="w-full flex gap-4">
            <div className="border border-slate-200 rounded-[10px] p-4 basis-1/2">
              <section className="w-full flex gap-4">
                <Plant_Height />
                <Unit />
              </section>
              <section className="w-full flex gap-4 pt-4">
                <Plant_Wide />
                <Each />
              </section>
            </div>
            <div className=" h-1/2  basis-1/2">
              <Leaf_Color />
              <p className="text-sm font-nunito pt-2 ">
                <span className="text-red-500">*</span> = must be filled
              </p>
            </div>
          </form>
        </section>
      </article>
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
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </>
  );
}
