"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FuncReminderSettingsInputEdit } from "@libs/redux/Slice/EditPlantSlice";
import {
  IconsMinus,
  IconChevronDown,
  IconsPlus,
} from "@/utils/Component-Icons-Reminder-settings";
import { EACHS, UNITS } from "./config";

const WF_Form = () => {
  const dispatch = useDispatch();

  const [openEach, setOpenEach] = useState(false);
  const [openUnit, setOpenUnit] = useState(false);

  const { watering_frequency, each, watering_amount, unit, watering_time } =
    useSelector(
      (state) => state.addplant.ReminderSettingsInput.watering_schedule
    );

  const handleIncrementFrequency = () => {
    dispatch(
      FuncReminderSettingsInputEdit({
        name: "watering_frequency",
        operator: "plus",
      })
    );
  };
  const handleDecrementFrequency = () => {
    dispatch(
      FuncReminderSettingsInput({
        name: "watering_frequency",
        operator: "minus",
      })
    );
  };
  const handleIncrementAmount = () => {
    dispatch(
      FuncReminderSettingsInput({ name: "watering_amount", operator: "plus" })
    );
  };

  const handleDecrementAmount = () => {
    dispatch(
      FuncReminderSettingsInput({ name: "watering_amount", operator: "minus" })
    );
  };

  const handleEachChange = (value) => {
    dispatch(FuncReminderSettingsInput({ name: "each", value }));
  };
  const handleUnitChange = (value) => {
    dispatch(FuncReminderSettingsInput({ name: "unit", value }));
  };

  const handleOpenEach = (value) => {
    setOpenEach(value);
  };
  const handleOpenUnit = (value) => {
    setOpenUnit(value);
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
                watering_frequency === 0 ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              {watering_frequency} times
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
                {EACHS.map((item, index) => (
                  <li
                    key={`${item.title}-${index}`}
                    onClick={() => {
                      handleEachChange(item.title);
                      handleOpenEach(false);
                    }}
                    className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
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
              value={watering_amount}
              onChange={(e) =>
                dispatch(
                  FuncReminderSettingsInput({
                    name: "watering_amount",
                    value: parseInt(e.target.value, 10) || 0,
                  })
                )
              }
              className={`text-center w-full focus:outline-none placeholder:text-[#6B7280] ${
                watering_amount === 0 ? "text-[#6B7280]" : "text-[#030712]"
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
                {UNITS.map((item, index) => (
                  <li
                    key={`${item.title}-${index}`}
                    onClick={() => {
                      handleUnitChange(item.title);
                      handleOpenUnit(false);
                    }}
                    className="py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
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
          value={watering_time}
          onChange={(e) =>
            dispatch(
              FuncReminderSettingsInput({
                name: "watering_time",
                value: e.target.value,
              })
            )
          }
          placeholder="00:00"
          className="border border-[#D1D5DB] rounded-lg py-[14px] px-3 block w-full placeholder:text-[#6B7280] resize-webkit-time-picker-indicator"
        />
      </div>

      <p className="text-xs font-nunito leading-normal font-normal">
        <span className="text-[#EF4444]">*</span> = must be filled
      </p>
    </div>
  );
};

export default WF_Form;
