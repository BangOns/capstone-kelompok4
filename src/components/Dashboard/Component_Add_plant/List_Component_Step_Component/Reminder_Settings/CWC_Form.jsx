import React, { useState } from "react";
import {
  IconChevronDown,
  IconsEdit,
} from "@/utils/Component-Icons-Reminder-settings";

const CWC_Form = ({ index, handleConditionChange }) => {
  const [ifTheWather, setIfTheWather] = useState("");
  const [whatYouNeed, setWhatYouNeed] = useState("");

  const handleWeatherChange = (e) => {
    setIfTheWather(e.target.value);
    handleConditionChange(index, e.target.value, whatYouNeed);
  };

  const handleNeedChange = (e) => {
    setWhatYouNeed(e.target.value);
    handleConditionChange(index, ifTheWather, e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-1">
        <label className="text-[#030712] font-nunito text-sm font-bold leading-normal block">
          If the weather is...
        </label>
        <div className="relative">
          <select
            value={ifTheWather}
            onChange={handleWeatherChange}
            className={`border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full appearance-none ${
              ifTheWather === "" ? "text-[#6B7280]" : "text-[#030712]"
            }`}
          >
            <option value="" hidden>
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
            value={whatYouNeed}
            onChange={handleNeedChange}
            className="border border-[#D1D5DB] rounded-lg mt-1 py-[14px] pl-3 pr-11 w-full block placeholder:text-[#6B7280]"
            placeholder="Create an recommended action for users..."
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <IconsEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CWC_Form;
