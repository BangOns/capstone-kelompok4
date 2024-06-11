import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

import { FuncReminderSettingsInput } from "@/libs/redux/Slice/AddPlantSlice";
import {
  IconChevronDown,
  IconsEdit,
  IconsTrash,
  IconsPlusAdd,
} from "@/utils/Component-Icons-Reminder-settings";
import { WEATHERS } from "./config";
import { AddPlantsContext } from "../../../../../hook/add-plants-providers";

const CWC_Form = () => {
  const dispatch = useDispatch();

  const {
    weatherCondition,
    setWeatherCondition,
    conditionDescription,
    setConditionDescription,
    condition,
    setCondition,
    weatherConditionDisplay,
    setWeatherConditionDisplay,
    isWeatherOpen,
    setIsWeatherOpen,
  } = useContext(AddPlantsContext);

  const handleConditionChange = (index, weather, description) => {
    const newCondition = [...condition];
    newCondition[index] = {
      weatherCondition: weather,
      conditionDescription: description,
    };
    setCondition(newCondition);
  };

  const handleWeatherDisplayChange = (index, value) => {
    setWeatherConditionDisplay((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
    setIsWeatherOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleDeleteCondition = (index) => {
    setCondition((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
    setWeatherConditionDisplay((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
    setIsWeatherOpen((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
    setWeatherCondition((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
    setConditionDescription((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  useEffect(() => {
    dispatch(
      FuncReminderSettingsInput({
        name: "weather_condition",
        value: weatherCondition,
      })
    );
    dispatch(
      FuncReminderSettingsInput({
        name: "condition_description",
        value: conditionDescription,
      })
    );
  }, [condition, dispatch]);

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
