"use client";

import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import { useDispatch } from "react-redux";
import { NextStep, PrevStep } from "@/libs/redux/Slice/DashboardSlice";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Plant_Caring() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  function handleClickPrev() {
    dispatch(PrevStep());
  }
  function handleClickNext() {
    dispatch(NextStep());
  }
  return (
    <div className="mt-6 p-4 border rounded-[10px]">
      <div className="border rounded-md border-neutral-200 p-4">
        <div className="flex flex-row gap-2 mb-6 items-center">
          <p className="text-xl font-nunito-bold">
            Additional Planting Instructions Tips{" "}
          </p>
          <p className="font-nunito-italic text-slate-500"> (if necessary) </p>
        </div>
        <ReactQuill
          className="w-full h-[249px] border border-neutral-300 flex-col-reverse flex  rounded"
          theme="snow"
          value={value}
          onChange={setValue}
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
  );
}
