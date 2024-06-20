"use client";

import React, { Fragment, useState } from "react";
import Upload_Image_Child_Plant from "./Plant_Information/Upload_Image_Child_Plant";
import Plant_Descriptions from "./Plant_Information/Plant_Descriptions";
import Plant_Input from "./Plant_Information/Plant_Input";
import Plant_Input_RadioButton from "./Plant_Information/Plant_Input_RadioButton";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import Plant_Information_Step2 from "./Plant_Information/Plant_Information_Step2";
import { useDispatch, useSelector } from "react-redux";
import Message_Error from "../../../Component_Message/Message_Error";
import {
  FuncMessageErrorPlantName,
  FuncMessagePlantError,
  FuncPlantInformationStep2,
} from "../../../../libs/redux/Slice/DashboardSlice";
import {
  FuncEditInputPlantInformation,
  FuncPlantInformationInputEdit,
} from "../../../../libs/redux/Slice/EditPlantSlice";
import Upload_Image_Plant from "./Plant_Information/Upload_Image_Plant";
import { ValidateInformation } from "../../../../utils/Validate_AddPlant/Validate_PlantInformation";
export default function Plant_Infromation() {
  const dispatch = useDispatch();
  const { plantInformationStep2 } = useSelector((state) => state.dashboard);
  const { dataPlantNewEdit, dataPlantEditFullField } = useSelector(
    (state) => state.editplant
  );
  const regex = /^[^-]+-[^-]+$/;
  function handleClickNext() {
    const checkValidate = ValidateInformation(dataPlantNewEdit);
    if (!checkValidate || !regex.test(dataPlantNewEdit.name)) {
      if (!regex.test(dataPlantNewEdit.name)) {
        dispatch(FuncMessageErrorPlantName(true));
      }
      dispatch(FuncMessagePlantError(true));
    } else {
      let PropsDataPlantInformation = {
        ...dataPlantNewEdit,
        plant_images: dataPlantNewEdit.plant_images.map((items) => {
          let newItem = { ...items };
          delete newItem.plant_id;
          delete newItem.id;
          return newItem;
        }),
      };

      dispatch(
        FuncEditInputPlantInformation({
          ...PropsDataPlantInformation,
        })
      );
      dispatch(FuncPlantInformationStep2(true));
    }
  }

  return (
    <Fragment>
      {!plantInformationStep2 ? (
        <div className="mt-6 p-4 border rounded-[10px]">
          <form className="w-full ">
            <article className="w-full flex justify-between gap-6 ">
              <section className="basis-1/2 h-full">
                <header className="pb-2">
                  <h1 className="font-nunito-bold text-sm ">
                    Upload Plant Image
                  </h1>
                </header>
                <article className="w-11/12 flex gap-4 h-[180px]">
                  <Upload_Image_Plant />
                  <section className="w-5/6">
                    <div className="w-full flex items-start justify-between">
                      {[1, 2, 3, 4].map((item, index) => (
                        <Upload_Image_Child_Plant key={index} ids={item} />
                      ))}
                    </div>
                    <div className="w-full flex items-start justify-between pt-2">
                      {[5, 6, 7, 8].map((item, index) => (
                        <Upload_Image_Child_Plant key={index} ids={item} />
                      ))}
                    </div>
                    <div className="pt-3 w-full">
                      <p className="text-sm font-poppins text-gray-300 ">
                        You can add up to 10 images (max. 2 MB per images)
                      </p>
                    </div>
                  </section>
                </article>
              </section>
              <Plant_Descriptions />
            </article>
            <Plant_Input />
            <Plant_Input_RadioButton />
            <article className="w-full pt-[15px]">
              <h4 className="text-xs font-nunito">
                <span className="text-red-500 ">*</span> = must be filled
              </h4>
            </article>
          </form>
          <div className="flex justify-between mt-10">
            <CancelButtonPlant />
            <div className=" flex">
              <PreviousButtonPlant disableOn={true} />
              <NextButtonPlant
                disabledOn={false}
                handleClick={handleClickNext}
              />
            </div>
          </div>
        </div>
      ) : (
        <Plant_Information_Step2 />
      )}
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </Fragment>
  );
}
