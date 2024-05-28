"use client";

import { useState } from "react";
import IconsPlus from "@/utils/Component-Icons-Reminder-settings/IconsPlus";
import IconsMinus from "@/utils/Component-Icons-Reminder-settings/IconsMinus";
import IconsPlusAdd from "@/utils/Component-Icons-Reminder-settings/IconsPlusAdd";

const Reminder_Settings = () => {
  const [wateringFrequency, setWateringFrequency] = useState(0);
  const [wateringUnit, setWateringUnit] = useState();
  const [wateringAmount, setWateringAmount] = useState("");
  const [wateringAmountUnit, setWateringAmountUnit] = useState("Unit");
  const [wateringTime, setWateringTime] = useState("00:00");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [action, setAction] = useState("");

  const handleIncrement = () => {
    setWateringFrequency((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setWateringFrequency((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="pt-4">
      <div className="flex justify-center items-center gap-4">
        <div className="w-[470px] h-[372px] border border-[#E5E7EB] rounded-md flex-shrink-0 p-4">
          <h3 className="text-[#030712] text-xl font-nunito font-bold leading-normal mb-6">
            Watering Frequency
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
                Watering Frequency<span className="text-[#EF4444]">*</span>
              </label>
              <div className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-[211px] h-[52px]">
                <div onClick={handleDecrement} className="cursor-pointer">
                  <IconsMinus />
                </div>
                <input
                  type="number"
                  value={wateringFrequency}
                  onChange={(e) => setWateringFrequency(Number(e.target.value))}
                  className="text-center w-16"
                  placeholder="0 times"
                  style={{
                    WebkitAppearance: "none",
                    // input[type=number]::webkit-inner-spin-button,
                    // input[type=number]::webkit-outer-spin-button {
                    //   -webkit-appearance: none;
                    //   margin: 0;
                    // }
                  }}
                />
                <div onClick={handleIncrement} className="cursor-pointer">
                  <IconsPlus />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
                Each<span className="text-[#EF4444]">*</span>
              </label>
              <select
                value={wateringUnit}
                onChange={(e) => setWateringUnit(e.target.value)}
                className="border border-[#D1D5DB] rounded-lg py-[14px] px-3  w-[211px] h-[52px]"
              >
                <option value="" hidden selected>
                  Each...
                </option>
                <option value="times">times</option>
                <option value="days">days</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4 my-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
                Watering Amount
              </label>
              <div className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-[211px] h-[52px]">
                <div onClick={handleDecrement} className="cursor-pointer">
                  <IconsMinus />
                </div>
                <input
                  type="number"
                  value={wateringAmount}
                  onChange={(e) => setWateringAmount(Number(e.target.value))}
                  className="text-center w-16"
                  placeholder="0"
                  style={{
                    WebkitAppearance: "none",
                    // input[type=number]::webkit-inner-spin-button,
                    // input[type=number]::webkit-outer-spin-button {
                    //   -webkit-appearance: none;
                    //   margin: 0;
                    // }
                  }}
                />
                <div onClick={handleIncrement} className="cursor-pointer">
                  <IconsPlus />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
                Unit
              </label>
              <select
                value={wateringAmountUnit}
                onChange={(e) => setWateringAmountUnit(e.target.value)}
                className="border border-[#D1D5DB] rounded-lg py-[14px] px-3 gap-[117px] w-[211px] h-[52px]"
              >
                <option value="" hidden selected>
                  Unit...
                </option>
                <option value="times">times</option>
                <option value="days">days</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[#030712] font-nunito text-sm font-bold leading-normal">
              Watering Time<span className="text-[#EF4444]">*</span>
            </label>
            <input
              type="time"
              value={wateringTime}
              onChange={(e) => setWateringTime(e.target.value)}
              className="border border-[#D1D5DB] rounded-lg py-3 pl-3"
            />
          </div>
          <p className="mt-4 text-xs font-nunito leading-normal font-normal">
            <span className="text-[#EF4444]">*</span> = must be filled
          </p>
        </div>
        <div className="w-[470px] h-[372px] border border-[#E5E7EB] rounded-md flex-shrink-0 p-4">
          <h3 className="text-[#030712] font-nunito font-bold text-xl leading-normal">
            Certain Weather Condition{" "}
            <span className="text-[#6B7280] font-normal text-sm italic">
              (if necessary)
            </span>
          </h3>
          <div className="flex flex-col gap-1 mt-6">
            <label className="text-[#030712] font-nunito font-bold text-sm leading-normal">
              If the weather is...
            </label>
            <select
              value={weatherCondition}
              onChange={(e) => setWeatherCondition(e.target.value)}
              className="w-[438px] h-[52px] border border-[#D1D5DB] rounded-lg mb-4 py-[15px] px-3"
            >
              <option value="" hidden selected>
                Choose weather condition...
              </option>
              <option value="rainy">Rainy</option>
              <option value="sunny">Sunny</option>
              <option value="cloudy">Cloudy</option>
            </select>
          </div>
          <label className="text-[#030712] font-nunito font-bold text-sm leading-normal">
            What you need to do is...
          </label>
          <input
            type="text"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-[438px] h-[52px] border border-[#D1D5DB] rounded-lg mt-1 py-[15px] px-3"
            placeholder="Create an recommended action for users..."
          />
          <div className="flex items-center gap-2 mt-4 cursor-pointer">
            <IconsPlusAdd />
            <p className="text-[#7DD3FC] font-nunito font-bold text-base leading-6">
              Add Condition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reminder_Settings;
