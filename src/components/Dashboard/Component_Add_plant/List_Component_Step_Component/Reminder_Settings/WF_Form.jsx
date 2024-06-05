"use client";

import React, { useState } from "react";
import {
  IconsMinus,
  IconChevronDown,
  IconsPlus,
} from "@/utils/Component-Icons-Reminder-settings";

const WF_Form = (props) => {
  const {
    wateringFrequency,
    wateringUnit,
    setWateringUnit,
    wateringAmount,
    setWateringAmount,
    wateringAmountUnit,
    setWateringAmountUnit,
    wateringTime,
    setWateringTime,
    handleIncrementAmmount,
    handleDecrementAmmount,
    handleIncrementFrequency,
    handleDecrementFrequency,
  } = props;

  const [openEach, setOpenEach] = useState(false);
  const [openUnit, setOpenUnit] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-[#030712] font-nunito text-sm font-bold leading-normal">
            Watering Frequency<span className="text-[#EF4444]">*</span>
          </p>
          <div className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full">
            <button onClick={handleDecrementFrequency}>
              <IconsMinus />
            </button>
            <p
              className={`${
                wateringFrequency === 0 ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              {wateringFrequency} times
            </p>
            <button onClick={handleIncrementFrequency}>
              <IconsPlus />
            </button>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-[#030712] font-nunito text-sm font-bold leading-normal">
            Each<span className="text-[#EF4444]">*</span>
          </p>
          <div className="relative">
            <div
              value={wateringUnit}
              onChange={(e) => setWateringUnit(e.target.innerText)}
              className={`w-full ${
                wateringUnit === "" ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              <div
                onClick={() => setOpenEach(!openEach)}
                className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full cursor-pointer"
              >
                <span
                  className={`font-nunito font-normal leading-normal text-base ${
                    wateringUnit ? "text-[#030712]" : "text-[#6B7280]"
                  }`}
                >
                  {wateringUnit || "Each..."}
                </span>
                <IconChevronDown />
              </div>
              <ul
                className={`mt-2 absolute z-10 shadow-lg bg-white w-full rounded-lg transition-max-height duration-300 ${
                  openEach ? "border border-[#D1D5DB]" : "hidden"
                }`}
              >
                <li
                  onClick={() => {
                    setWateringUnit("Day");
                    setOpenEach(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Day
                </li>
                <li
                  onClick={() => {
                    setWateringUnit("Week");
                    setOpenEach(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Week
                </li>
                <li
                  onClick={() => {
                    setWateringUnit("Month");
                    setOpenEach(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Month
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
            Watering Amount
          </label>
          <div className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 gap-2 w-full">
            <button onClick={handleDecrementAmmount}>
              <IconsMinus />
            </button>
            <input
              type="number"
              value={wateringAmount}
              onChange={(e) => setWateringAmount(parseInt(e.target.value))}
              className={`text-center w-full focus:outline-none placeholder:text-[#6B7280] ${
                wateringAmount === 0 ? "text-[#6B7280]" : "text-[#030712]"
              }`}
              placeholder="0"
              min={0}
            />
            <button onClick={handleIncrementAmmount}>
              <IconsPlus />
            </button>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
            Unit
          </label>
          <div className="relative">
            <div
              value={wateringAmountUnit}
              onChange={(e) => setWateringAmountUnit(e.target.innerText)}
              className={`w-full ${
                wateringAmountUnit === "" ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              <div
                onClick={() => setOpenUnit(!openUnit)}
                className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full cursor-pointer"
              >
                <span
                  className={`font-nunito font-normal leading-normal text-base ${
                    wateringAmountUnit ? "text-[#030712]" : "text-[#6B7280]"
                  }`}
                >
                  {wateringAmountUnit || "Unit..."}
                </span>
                <IconChevronDown />
              </div>
              <ul
                className={`mt-2 absolute z-10 shadow-lg bg-white w-full rounded-lg transition-max-height duration-300 ${
                  openUnit ? "border border-[#D1D5DB]" : "hidden"
                }`}
              >
                <li
                  onClick={() => {
                    setWateringAmountUnit("Liter");
                    setOpenUnit(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Liter
                </li>
                <li
                  onClick={() => {
                    setWateringAmountUnit("Milliliter");
                    setOpenUnit(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Milliliter
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
          Watering Time<span className="text-[#EF4444]">*</span>
        </label>
        <input
          type="time"
          value={wateringTime}
          onChange={(e) => setWateringTime(e.target.value)}
          placeholder="00:00"
          className="border border-[#D1D5DB] rounded-lg py-3 px-3 block w-full placeholder:text-[#6B7280] resize-webkit-time-picker-indicator"
        />
      </div>

      <p className="text-xs font-nunito leading-normal font-normal">
        <span className="text-[#EF4444]">*</span> = must be filled
      </p>
    </div>
  );
};

export default WF_Form;
