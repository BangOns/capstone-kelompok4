"use client";

import { useState } from "react";
import {
  IconsMinus,
  IconChevronDown,
  IconsEdit,
  IconsPlus,
  IconsPlusAdd,
} from "@/utils/Component-Icons-Reminder-settings";

const Reminder_Settings = () => {
  const [wateringFrequency, setWateringFrequency] = useState(0);
  const [wateringUnit, setWateringUnit] = useState("");
  const [wateringAmount, setWateringAmount] = useState(0);
  const [wateringAmountUnit, setWateringAmountUnit] = useState("");
  const [wateringTime, setWateringTime] = useState("00:00");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [action, setAction] = useState("");

  const handleIncrementFrequency = () => {
    setWateringFrequency((prev) => prev + 1);
  };

  const handleDecrementFrequency = () => {
    setWateringFrequency((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrementAmmount = () => {
    setWateringAmount((prev) => prev + 1);
  };

  const handleDecrementAmmount = () => {
    setWateringAmount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section>
      <div className="grid grid-cols-2 justify-center items-center gap-4">
        <div className="h-full border border-[#E5E7EB] rounded-md p-4">
          <h3 className="text-[#030712] text-xl font-nunito font-bold leading-normal mb-6">
            Watering Frequency
          </h3>
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
                      wateringFrequency === 0
                        ? "text-[#6B7280]"
                        : "text-[#030712]"
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
                    <option value="" hidden selected>
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
                    onChange={(e) =>
                      setWateringAmount(parseInt(e.target.value))
                    }
                    className={`text-center w-full focus:outline-none placeholder:text-[#6B7280] ${
                      wateringAmount === 0 ? "text-[#6B7280]" : "text-[#030712]"
                    }`}
                    placeholder="0"
                    defaultValue={0}
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
                      wateringAmountUnit === ""
                        ? "text-[#6B7280]"
                        : "text-[#030712]"
                    }`}
                  >
                    <option value="" hidden selected>
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
        </div>

        <div className="h-full border border-[#E5E7EB] rounded-md p-4">
          <h3 className="text-[#030712] font-nunito font-bold text-xl leading-normal mb-6">
            Certain Weather Condition{" "}
            <span className="text-[#6B7280] font-normal text-sm italic">
              (if necessary)
            </span>
          </h3>
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <label className="text-[#030712] font-nunito text-sm font-bold leading-normal block">
                If the weather is...
              </label>
              <div className="relative">
                <select
                  value={weatherCondition}
                  onChange={(e) => setWeatherCondition(e.target.value)}
                  className={`border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full appearance-none ${
                    weatherCondition === ""
                      ? "text-[#6B7280]"
                      : "text-[#030712]"
                  }`}
                >
                  <option value="" hidden selected>
                    Choose weather condition...
                  </option>
                  <option value="rainy">🌧️ Rainy</option>
                  <option value="sunny"> ☀️ Sunny</option>
                  <option value="cloudy">☁️ Cloudy</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <IconChevronDown />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[#030712] font-nunito font-bold text-sm leading-normal">
                What you need to do is...
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="border border-[#D1D5DB] rounded-lg mt-1 py-[14px] pl-3 pr-11 w-full block placeholder:text-[#6B7280]"
                  placeholder="Create an recommended action for users..."
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <IconsEdit />
                </div>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-2">
                <IconsPlusAdd fill={action === "" ? "#7DD3FC" : "#10B981"} />
                <span
                  className={`font-nunito font-bold text-base leading-6 ${
                    action === "" ? "text-[#7DD3FC]" : "text-[#10B981]"
                  }`}
                >
                  Add Condition
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reminder_Settings;
