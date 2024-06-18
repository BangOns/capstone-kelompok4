"use client";
import IconsAddPlant from "@/utils/Component-Icons-Add-plant/IconsAddPlant";
import { ImageImport } from "@/utils/ImageImport";
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import { useDispatch, useSelector } from "react-redux";
import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncPrevStep,
  FuncDeletePlant,
} from "../../../../libs/redux/Slice/DashboardSlice";
import {
  FuncEditInputPlantInformation,
  FuncPlantingInstructionsEdit,
} from "../../../../libs/redux/Slice/EditPlantSlice";
// import {
//   FuncAddInputPlantInformation,
//   FuncPlantingInstructions,
// } from "../../../../libs/redux/Slice/AddPlantSlice";
import Message_Error from "../../../Component_Message/Message_Error";
import { IconsEdit } from "../../../../utils/Component-Icons-Reminder-settings";
import DropdownSearch from "./Planting_Instructions/dropdown";
import Alert_DeletePlantInstructions from "../Component-Alert/Alert_Delete_PlantInstructions";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Planting_Instructions({ DataPlantEdit }) {
  const dispatch = useDispatch();
  const count = useSelector(
    (state) => state.editplant.PlantingInstructionsEdit
  );
  const { dataPlantEdit } = useSelector((state) => state.editplant);
  const fileInputRef = useRef(null);
  const [data, setData] = useState(count);
  const [hide, setHide] = useState();
  const [index, setIndex] = useState();

  function handleClickPrev() {
    dispatch(FuncPrevStep());
    dispatch(FuncPlantingInstructionsEdit(data));
  }

  function handleClickNext() {
    if (data.length === 0) {
      dispatch(FuncMessagePlantError(true));
    } else {
      const plant_instructions = [...data];
      dispatch(
        FuncEditInputPlantInformation({
          ...dataPlantEdit,
          plant_instructions,
        })
      );
      dispatch(FuncEditInputPlantInformation(data));
      dispatch(FuncNextStep());
    }
  }

  function add() {
    if (!data.length) {
      setData([
        {
          instruction_category_id: 0,
          step_number: data.length + 1,

          step_title: "",
          step_description: "",
          step_image_url: "",
        },
      ]);
    } else {
      setData([
        ...data,
        {
          instruction_category_id: 0,
          step_number: data.length + 1,

          step_title: "",
          step_description: "",
          step_image_url: "",
        },
      ]);
    }
  }
  //belom keubah ke edit
  const updateField = (index, field, value) => {
    const newData = [...data];
    if (field === "step_image_url") {
      const file = value.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        newData[index] = { ...newData[index], [field]: imageUrl };
        const dataNew = newData;
        setData(dataNew);
      }
    } else {
      newData[index] = { ...newData[index], [field]: value };
      setData(newData);
    }
  };

  async function delet(e) {
    setIndex(e);
    dispatch(FuncDeletePlant({ popUp: true, id: e }));
  }

  function handleClickDeleteStep({ confirmation }) {
    if (confirmation) {
      const newData = [...data];
      newData.splice(index, 1);

      const updateData = newData.map((items, i) => ({
        ...items,
        step_number: i + 1,
      }));
      setData(updateData);
    }
  }
  return (
    <Fragment>
      <div className="mt-6 p-4 border rounded-[10px]">
        <div className="rounded-lg border-2 mt-10">
          <div className="md:flex  m-[16px] mx-10 ">
            <div className="w-full ">
              <div
                className="flex text-green-500 w-fit cursor-pointer"
                onClick={add}
              >
                <div className="mr-[16px] ">
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

          {data.length == 0 ? (
            <div className="border-2 md:border-2 md:rounded-lg md:mx-10 mb-10 text-center h-32"></div>
          ) : (
            data?.map((e, i) => (
              <div
                key={i}
                className="border-2 md:border-2 md:rounded-lg md:mx-10 mb-10 pb-4"
              >
                <div className={`${hide == i ? "hidden" : "md:flex"}`}>
                  <div className="grid justify-items-end mx-5">
                    <Image
                      className="m-auto py-5"
                      src={
                        e.step_image_url == ""
                          ? ImageImport.ImageTest
                          : e.step_image_url
                      }
                      width={56}
                      height={56}
                      alt="image"
                    />
                  </div>
                  <div className="mx-[16px] my-5 text-[14px] ">
                    <p className=" font-bold ">Step {e.step_number}</p>
                    <p className="text-[#6B7280]">{e.step_title}</p>
                  </div>
                  <div className="flex ml-auto">
                    <Image
                      className="m-[16px] max-md:mx-auto cursor-pointer"
                      src={IconsImport.IconsDeletePlant}
                      alt="delet"
                      onClick={() => delet(i)}
                    />
                    <Image
                      onClick={() => {
                        setHide(i);
                      }}
                      className="m-[16px] max-md:mx-auto cursor-pointer"
                      src={IconsImport.IconsDropdown}
                      alt="dropdown"
                    />
                  </div>
                </div>
                <div className={`${hide == i ? "" : "hidden"}`}>
                  <div className="xl:flex">
                    <p className="mx-[16px] my-5 font-bold">Step {i + 1}</p>
                    <div className="flex ml-auto">
                      <Image
                        className="m-[16px] max-md:mx-auto cursor-pointer"
                        src={IconsImport.IconsDeletePlant}
                        alt="image"
                        onClick={() => delet(i)}
                      />
                      <Image
                        onClick={() => {
                          hide === i ? setHide(null) : setHide(i);
                        }}
                        className="m-[16px] max-md:mx-auto cursor-pointer"
                        src={IconsImport.IconsDropdown}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="xl:flex">
                    <div className="relative">
                      <Image
                        src={
                          e.step_image_url == ""
                            ? ImageImport.ImageTest
                            : e.step_image_url
                        }
                        className="max-xl:m-auto"
                        height={237}
                        width={237}
                        alt="profile"
                      />
                      <div className="absolute bg-[#10B981] p-3 border rounded-lg w-fit h-fit top-0 right-0">
                        <input
                          type="file"
                          className="hidden"
                          id={`image-url-${i}`}
                          onChange={(event) =>
                            updateField(i, "step_image_url", event)
                          }
                        />
                        <Image
                          src={IconsImport.IconsEdit}
                          className="max-xl:m-auto cursor-pointer"
                          alt="profile"
                          onClick={() =>
                            document.getElementById(`image-url-${i}`).click()
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="xl:flex m-5 ">
                        <div className=" w-full">
                          <p className="text-[14px] font-[700]">
                            Title<span className="text-red-500">*</span>
                          </p>
                          <div className="relative w-full">
                            <input
                              className="p-2 border rounded-lg border-gray-300 max-xl:w-full xl:w-[90%] pr-10"
                              type="text"
                              name=""
                              id=""
                              value={e.step_title}
                              onChange={(event) =>
                                updateField(i, "step_title", event.target.value)
                              }
                            />
                            <div className="absolute inset-y-0 right-[50px] flex items-center">
                              <IconsEdit />
                            </div>
                          </div>
                        </div>
                        <div className=" w-full">
                          <p className="text-[14px] font-[700]  ml-2">
                            Steps Categorys
                            <span className="text-red-500">*</span>
                          </p>
                          <DropdownSearch
                            setCategory={(category) =>
                              updateField(
                                i,
                                "instruction_category_id",
                                category
                              )
                            }
                          ></DropdownSearch>
                        </div>
                      </div>
                      <ReactQuill
                        className="flex-col-reverse flex  m-5 border-2 rounded-lg  h-[50%]"
                        theme="snow"
                        value={e.step_description}
                        onChange={(value) =>
                          updateField(i, "step_description", value)
                        }
                      ></ReactQuill>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="md:flex justify-between mt-10">
          <CancelButtonPlant />
          <div className="flex">
            <PreviousButtonPlant
              handleClick={handleClickPrev}
              disableOn={false}
            />
            <NextButtonPlant disabledOn={false} handleClick={handleClickNext} />
          </div>
        </div>
      </div>
      <Alert_DeletePlantInstructions
        onCLickDeleteStep={handleClickDeleteStep}
      />
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </Fragment>
  );
}
