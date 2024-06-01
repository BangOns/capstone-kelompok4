"use client";
import IconsAddPlant from "@/utils/Component-Icons-Add-plant/IconsAddPlant";
import { ImageImport } from "@/utils/ImageImport";
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import { Fragment, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import { useDispatch } from "react-redux";
import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncPrevStep,
} from "../../../../libs/redux/Slice/DashboardSlice";
import Message_Error from "../../../Component_Message/Message_Error";
import { IconsEdit } from "../../../../utils/Component-Icons-Reminder-settings";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Planting_Instructions() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleClickPrev() {
    dispatch(FuncPrevStep());
  }
  function handleClickNext() {
    dispatch(FuncMessagePlantError(true));
    dispatch(FuncNextStep());
  }

  return (
    <Fragment>
      <div className="mt-6 p-4 border rounded-[10px]">
        <div className="rounded-lg border-2 mt-10">
          <div className="flex  m-[16px] mx-10 ">
            <div className="w-full  ">
              <div className="flex text-green-500">
                <div className="mr-[16px]">
                  <IconsAddPlant />
                </div>
                <p className="text-[16px]"> Add Steps</p>
              </div>
            </div>
            <p className="w-full text-[#6B7280] text-right text-[12px] m-auto">
              If you finish editing, it will
              <span className="text-green-500"> autosave </span> when you
              minimize the box
            </p>
          </div>
          <div className=" border-2 rounded-lg mx-10 mb-10 border-slate-400">
            <div className="flex">
              <p className="mx-[16px] my-5 font-bold">Step 1</p>
              <div className="flex ml-auto">
                <Image
                  className="m-[16px]"
                  src={IconsImport.IconsDeletePlant}
                  alt="image"
                />
                <Image
                  className="m-[16px]"
                  src={IconsImport.IconsDropdown}
                  alt="image"
                />
              </div>
            </div>
            <div className="flex">
              <Image src={ImageImport.ImageTest} alt="profile" />
              <div className="w-full">
                <div className="flex m-5">
                  <div className=" w-full">
                    <p className="text-[14px] font-[700]">
                      Title<span className="text-red-500">*</span>
                    </p>
                    <div className="relative w-full">
                      <input
                        className="p-2 border-2 rounded-lg border-black h-[52px] w-[90%] pr-10"
                        type="text"
                        name=""
                        id=""
                      />
                      <div className="absolute inset-y-0 right-[50px] flex items-center">
                        <IconsEdit />
                      </div>
                    </div>
                  </div>
                  <div className=" w-full">
                    <p className="text-[14px] font-[700]  ml-2">
                      Steps Categorys <span className="text-red-500">*</span>
                    </p>
                    <select
                      className="p-2 border-2 rounded-lg border-black h-[52px] bg-white w-[100%]"
                      name=""
                      id=""
                    >
                      <option value="">Soil Preparation</option>
                      <option value="">a</option>
                      <option value="">a</option>
                    </select>
                  </div>
                </div>
                <ReactQuill
                  className="flex-col-reverse flex  m-5 border-2 rounded-lg  h-[50%]"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                ></ReactQuill>
              </div>
            </div>
          </div>
          <div className=" border-2 rounded-lg mx-10 mb-10">
            <div className="flex">
              <div className="grid justify-items-end mx-5">
                <Image
                  className="m-auto"
                  src={ImageImport.ImageTest}
                  width={56}
                  height={56}
                  alt="image"
                />
              </div>
              <div className="mx-[16px] my-5 text-[14px] ">
                <p className=" font-bold ">Step 2</p>
                <p className="text-[#6B7280]">Choose Planting Location</p>
              </div>
              <div className="flex ml-auto">
                <Image
                  className="m-[16px]"
                  src={IconsImport.IconsDeletePlant}
                  alt="delet"
                />
                <Image
                  className="m-[16px]"
                  src={IconsImport.IconsDropdown}
                  alt="dropdown"
                />
              </div>
            </div>
          </div>
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
