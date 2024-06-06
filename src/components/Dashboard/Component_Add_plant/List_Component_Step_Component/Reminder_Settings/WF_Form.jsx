"use client";

import React, { useState } from "react";
import {
  IconsMinus,
  IconChevronDown,
  IconsPlus,
} from "@/utils/Component-Icons-Reminder-settings";
import { useDispatch, useSelector } from "react-redux";
import { FuncReminderSettingsInput } from "../../../../../libs/redux/Slice/AddPlantSlice";

const WF_Form = () => {
  const dispatch = useDispatch();
  const wateringFrequency = useSelector(
    (state) => state.addplant.ReminderSettingsInput.frequency
  );
  const wateringAmount = useSelector(
    (state) => state.addplant.ReminderSettingsInput.amount
  );
  const each = useSelector(
    (state) => state.addplant.ReminderSettingsInput.each
  );
  const unit = useSelector(
    (state) => state.addplant.ReminderSettingsInput.unit
  );
  const time = useSelector(
    (state) => state.addplant.ReminderSettingsInput.time
  );
  const openEach = useSelector(
    (state) => state.addplant.ReminderSettingsInput.openEach
  );
  const openUnit = useSelector(
    (state) => state.addplant.ReminderSettingsInput.openUnit
  );

  const handleIncrementFrequency = () => {
    dispatch(
      FuncReminderSettingsInput({
        name: "frequency",
        operator: "plus",
      })
    );
  };

  const handleDecrementFrequency = () => {
    dispatch(
      FuncReminderSettingsInput({
        name: "frequency",
        operator: "minus",
      })
    );
  };
  const handleIncrementAmount = () => {
    dispatch(
      FuncReminderSettingsInput({
        name: "amount",
        operator: "plus",
      })
    );
  };

  const handleDecrementAmount = () => {
    dispatch(
      FuncReminderSettingsInput({
        name: "amount",
        operator: "minus",
      })
    );
  };
  const handleEachChange = (value) => {
    dispatch(FuncReminderSettingsInput({ name: "each", value }));
  };
  const handleUnitChange = (value) => {
    dispatch(FuncReminderSettingsInput({ name: "unit", value }));
  };
  const handleOpenEach = (value) => {
    dispatch(FuncReminderSettingsInput({ name: "openEach", value }));
  };
  const handleOpenUnit = (value) => {
    dispatch(FuncReminderSettingsInput({ name: "openUnit", value }));
  };

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
              value={each}
              onChange={(e) => handleEachChange(e.target.innerText)}
              className={`w-full ${
                each === "" ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              <div
                onClick={() => handleOpenEach(!openEach)}
                className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full cursor-pointer"
              >
                <span
                  className={`font-nunito font-normal leading-normal text-base ${
                    each ? "text-[#030712]" : "text-[#6B7280]"
                  }`}
                >
                  {each || "Each..."}
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
                    handleEachChange("Day");
                    handleOpenEach(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Day
                </li>
                <li
                  onClick={() => {
                    handleEachChange("Week");
                    handleOpenEach(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Week
                </li>
                <li
                  onClick={() => {
                    handleEachChange("Month");
                    handleOpenEach(false);
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
            <button onClick={handleDecrementAmount}>
              <IconsMinus />
            </button>
            <input
              type="number"
              value={wateringAmount}
              className={`text-center w-full focus:outline-none placeholder:text-[#6B7280] ${
                wateringAmount === 0 ? "text-[#6B7280]" : "text-[#030712]"
              }`}
              placeholder="0"
              min={0}
            />
            <button onClick={handleIncrementAmount}>
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
              value={unit}
              onChange={(e) => handleUnitChange(e.target.innerText)}
              className={`w-full ${
                unit === "" ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              <div
                onClick={() => handleOpenUnit(!openUnit)}
                className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full cursor-pointer"
              >
                <span
                  className={`font-nunito font-normal leading-normal text-base ${
                    unit ? "text-[#030712]" : "text-[#6B7280]"
                  }`}
                >
                  {unit || "Unit..."}
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
                    handleUnitChange("Liter");
                    handleOpenUnit(false);
                  }}
                  className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  Liter
                </li>
                <li
                  onClick={() => {
                    handleUnitChange("Milliliter");
                    handleOpenUnit(false);
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
          value={time}
          onChange={(e) =>
            dispatch(
              FuncReminderSettingsInput({ name: "time", value: e.target.value })
            )
          }
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
