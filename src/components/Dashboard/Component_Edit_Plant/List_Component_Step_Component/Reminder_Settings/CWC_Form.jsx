import React, { useState } from "react";
import {
  IconChevronDown,
  IconsEdit,
  IconsTrash,
  IconsSun,
  IconsCloudy,
  IconsRainy,
  IconsStormy,
} from "@/utils/Component-Icons-Reminder-settings";

const CWC_Form = ({ index, handleConditionChange, handleDeleteCondition }) => {
  const [ifTheWather, setIfTheWather] = useState("");
  const [whatYouNeed, setWhatYouNeed] = useState("");
  const [openWeather, setOpenWeather] = useState(false);

  const handleWeatherChange = (weather) => {
    setIfTheWather(weather);
    handleConditionChange(index, weather, whatYouNeed);
    setOpenWeather(false);
  };

  const handleNeedChange = (e) => {
    setWhatYouNeed(e.target.value);
    handleConditionChange(index, ifTheWather, e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-1">
        <div className="flex justify-between">
          <label className="text-[#030712] font-nunito text-sm font-bold leading-normal block">
            If the weather is...
          </label>
          <div
            onClick={() => handleDeleteCondition(index)}
            className="cursor-pointer"
          >
            <IconsTrash />
          </div>
        </div>
        <div className="relative">
          <div
            value={ifTheWather}
            onChange={handleWeatherChange}
            className={`w-full ${
              ifTheWather === "" ? "text-[#6B7280]" : "text-[#030712]"
            }`}
          >
            <div
              onClick={() => setOpenWeather(!openWeather)}
              className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 cursor-pointer"
            >
              <span
                className={`font-nunito font-normal leading-normal text-base ${
                  ifTheWather ? "text-[#030712]" : "text-[#6B7280]"
                }`}
              >
                {ifTheWather || "Choose weather condition..."}
              </span>

              <IconChevronDown />
            </div>
            {openWeather && (
              <ul
                className={`mt-2 overflow-y-auto custom-scrollbar absolute z-10 shadow-lg bg-white w-full rounded-lg transition-max-height duration-300 ${
                  openWeather ? "max-h-40 border border-[#D1D5DB]" : "hidden"
                }`}
              >
                <li
                  onClick={() =>
                    handleWeatherChange(
                      <span className="flex items-center gap-2">
                        <IconsSun />
                        Bright Sun
                      </span>
                    )
                  }
                  className="flex items-center gap-2 py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  <IconsSun /> Bright Sun
                </li>
                <li
                  onClick={() =>
                    handleWeatherChange(
                      <span className="flex items-center gap-2">
                        <IconsCloudy />
                        Part Cloudy Sun
                      </span>
                    )
                  }
                  className="flex items-center gap-2 py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  <IconsCloudy /> Part Cloudy Sun
                </li>
                <li
                  onClick={() =>
                    handleWeatherChange(
                      <span className="flex items-center gap-2">
                        <IconsRainy />
                        Rainy
                      </span>
                    )
                  }
                  className="flex items-center gap-2 py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  <IconsRainy /> Rainy
                </li>
                <li
                  onClick={() =>
                    handleWeatherChange(
                      <span className="flex items-center gap-2">
                        {" "}
                        <IconsStormy />
                        Stormy Rain
                      </span>
                    )
                  }
                  className="flex items-center gap-2 py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                >
                  <IconsStormy /> Stormy Rain
                </li>
              </ul>
            )}
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
