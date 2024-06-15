"use client";

import React, { Fragment, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Message_Error from "../../../Component_Message/Message_Error";
import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncPrevStep,
} from "../../../../libs/redux/Slice/DashboardSlice";
// import {
//   FuncAddInputPlantInformation,
//   FuncPlantCaringInput,
// } from "../../../../libs/redux/Slice/AddPlantSlice";
import { FuncEditInputPlantInformation, FuncPlantCaringInputEdit } from "../../../../libs/redux/Slice/EditPlantSlice";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Plant_Caring() {
  const [value, setValue] = useState("");
  const { PlantCaringInputEdit, dataPlantEdit } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  function handleClickPrev() {
    dispatch(FuncPrevStep());
  }
  function handleClickNext() {
    if (PlantCaringInputEdit.additional_tips === "") {
      dispatch(FuncMessagePlantError(true));
    } else {
      const dataInpPlantCaring = {
        ...PlantCaringInputEdit,
      };
      dispatch(
        FuncEditInputPlantInformation({
          ...dataPlantEdit,
          ...dataInpPlantCaring,
        })
      );
      dispatch(FuncNextStep());
    }
  }

  return (
    <Fragment>
      <div className="mt-6 p-4 border rounded-[10px]">
        <div className="border rounded-md border-neutral-200 p-4">
          <div className="flex flex-row gap-2 mb-6 items-center">
            <p className="text-xl font-nunito-bold">
              Additional Planting Instructions Tips{" "}
            </p>
            <p className="font-nunito-italic text-slate-500">
              {" "}
              (if necessary){" "}
            </p>
          </div>
          <ReactQuill
            className="w-full h-[249px] text-neutral-950 border border-neutral-400 text-[14px] flex-col-reverse flex rounded-md"
            theme="snow"
            value={PlantCaringInputEdit.additional_tips || value}
            onChange={(e) => {
              setValue(e);
              dispatch(
                FuncPlantCaringInputEdit({ name: "additional_tips", value: e })
              );
            }}
            placeholder="Additional Planting Instructions Tips..."
          />
        </div>
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
      </div>
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </Fragment>
  );
}
