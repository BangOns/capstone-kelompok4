"use client";
import React from "react";
import CancelButtonPlant from "../../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../../Component_Buttons/next_buton_plant";
import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncPlantInformationStep2,
} from "../../../../../libs/redux/Slice/DashboardSlice";
import Message_Error from "../../../../Component_Message/Message_Error";
import Leaf_Color from "./Select_Option/Leaf_Color";
export default function Plant_Information_Step2() {
  const dispatch = useDispatch();
  function handleClickNext() {
    dispatch(FuncMessagePlantError(true));
    dispatch(FuncNextStep());
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
        <section className="w-full p-4 border-slate-200 border rounded-[10px] flex gap-6">
          <article className="flex  gap-4 items-center">
            <figure className="w-[60px] h-[60px] rounded-xl border flex items-end justify-center bg-gray-200 overflow-hidden bg-gradient-to-b from-50% from-white to-gray-200/60">
              <Image src={ImageImport.ImagePlants} alt="Image plants" />
            </figure>
            <div className="">
              <h4 className="font-nunito-bold">Tomato</h4>
              <p className="text-sm font-nunito italic text-slate-500">
                Solanaceae
              </p>
            </div>
          </article>
          <div className="w-px h-[60px] bg-slate-500"></div>
          <article className="flex gap-10 items-center">
            <section>
              <h4 className="text-sm font-nunito text-slate-500">
                Plant Category
              </h4>
              <p className="font-nunito-bold ">Fruits</p>
            </section>
            <section>
              <h4 className="text-sm font-nunito text-slate-500">Toxicity</h4>
              <p className="font-nunito-bold ">Non-Toxic Plant</p>
            </section>
            <section>
              <h4 className="text-sm font-nunito text-slate-500">
                Harvest Duration
              </h4>
              <p className="font-nunito-bold ">5 Months</p>
            </section>
            <section>
              <h4 className="text-sm font-nunito text-slate-500">
                Climate Condition
              </h4>
              <p className="font-nunito-bold ">Dry</p>
            </section>
          </article>
        </section>
        <section className="mt-4 ">
          <header className="mb-3">
            <h1 className="font-nunito-bold text-[20px]">
              Plant Charateristic
            </h1>
          </header>
          <form className="w-full flex gap-4">
            <div className="border border-slate-200 rounded-[10px] p-4 basis-1/2">
              <section className="w-full flex gap-4">
                <div className="w-[211px] xl:w-1/2 ">
                  <h2 className="text-sm font-nunito-bold pb-1">
                    Height<span className="text-red-500">*</span>
                  </h2>
                  <div className="w-full items-center flex justify-between py-[14px] px-3 border border-slate-950 rounded-lg">
                    <FiMinus />
                    <p>0</p>
                    <FiPlus />
                  </div>
                </div>
                <div className="w-[211px] xl:w-1/2">
                  <h2 className="text-sm font-nunito-bold pb-1">
                    Unit<span className="text-red-500">*</span>
                  </h2>
                  <div className="w-full items-center flex justify-between py-[14px] px-3 border border-slate-950 rounded-lg">
                    <select
                      name=""
                      id=""
                      className="w-full focus:ring-0 outline-none"
                    >
                      <option value="">Meter</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                </div>
              </section>
              <section className="w-full flex gap-4 pt-4">
                <div className="w-[211px] xl:w-1/2 ">
                  <h2 className="text-sm font-nunito-bold pb-1">
                    Wide<span className="text-red-500">*</span>
                  </h2>
                  <div className="w-full items-center flex justify-between py-[14px] px-3 border border-slate-950 rounded-lg">
                    <FiMinus />
                    <p>0</p>
                    <FiPlus />
                  </div>
                </div>
                <div className="w-[211px] xl:w-1/2">
                  <h2 className="text-sm font-nunito-bold pb-1">
                    Each<span className="text-red-500">*</span>
                  </h2>
                  <div className="w-full items-center flex justify-between py-[14px] px-3 border border-slate-950 rounded-lg">
                    <select
                      name=""
                      id=""
                      className="w-full focus:ring-0 outline-none"
                    >
                      <option value="">Centimeter</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </div>
                </div>
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
