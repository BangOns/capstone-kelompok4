import React from "react";
import {
  IconsMinus,
  IconChevronDown,
  IconsEdit,
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
            <select
              value={wateringUnit}
              onChange={(e) => setWateringUnit(e.target.value)}
              className={`border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full appearance-none ${
                wateringUnit === "" ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              <option value="" hidden>
                Each...
              </option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <IconChevronDown />
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
            <select
              value={wateringAmountUnit}
              onChange={(e) => setWateringAmountUnit(e.target.value)}
              className={`border border-[#D1D5DB] rounded-lg py-[14px] px-3 gap-[117px] w-full appearance-none ${
                wateringAmountUnit === "" ? "text-[#6B7280]" : "text-[#030712]"
              }`}
            >
              <option value="" hidden>
                Unit...
              </option>
              <option value="ml">milliliter (ml)</option>
              <option value="l">liter (l)</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <IconChevronDown />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
          Watering Time<span className="text-[#EF4444]">*</span>
        </label>
        <div className="relative">
          <input
            type="time"
            value={wateringTime}
            onChange={(e) => setWateringTime(e.target.value)}
            placeholder="00:00"
            className="border border-[#D1D5DB] rounded-lg py-3 pl-3 block w-full appearance-none placeholder:text-[#6B7280] hide-webkit-time-picker-indicator"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <IconsEdit />
          </div>
        </div>
      </div>

      <p className="text-xs font-nunito leading-normal font-normal">
        <span className="text-[#EF4444]">*</span> = must be filled
      </p>
    </div>
  );
};

export default WF_Form;
