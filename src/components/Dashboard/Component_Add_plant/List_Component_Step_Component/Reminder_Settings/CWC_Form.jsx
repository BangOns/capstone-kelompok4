import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { FuncReminderSettingsInput } from "@/libs/redux/Slice/AddPlantSlice";
import {
  IconChevronDown,
  IconsEdit,
  IconsTrash,
  IconsPlusAdd,
} from "@/utils/Component-Icons-Reminder-settings";
import { WEATHERS } from "./config";

const CWC_Form = () => {
  const dispatch = useDispatch();

  const [weatherCondition, setWeatherCondition] = useState([]);
  const [conditionDescription, setConditionDescription] = useState([]);

  const [condition, setCondition] = useState([
    {
      weatherCondition: "",
      conditionDescription: "",
    },
  ]);

  const handleConditionChange = (index, weather, description) => {
    const newCondition = [...condition];
    newCondition[index] = {
      weatherCondition: weather,
      conditionDescription: description,
    };
    setCondition(newCondition);
  };

  const [isWeatherOpen, setIsWeatherOpen] = useState([]);
  const [weatherConditionDisplay, setWeatherConditionDisplay] = useState([]);

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
  };

  useEffect(() => {
    const weatherCondition = condition.map((c) => c.weatherCondition);
    const conditionDescription = condition.map((c) => c.conditionDescription);
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
    <div className="h-full border border-[#E5E7EB] rounded-md p-4">
      <h3 className="text-[#030712] font-nunito font-bold text-xl leading-normal mb-6">
        Certain Weather Condition{" "}
        <span className="text-[#6B7280] font-normal text-sm italic">
          (if necessary)
        </span>
      </h3>
      <div className="flex flex-col gap-4">
        {condition.map((_, conditionIndex) => {
          const lastIndex = condition.length - 1;

          return (
            <React.Fragment key={conditionIndex}>
              <div className="flex flex-col gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <label className="text-[#030712] font-nunito text-sm font-bold leading-normal block">
                      If the weather is...
                    </label>
                    {conditionIndex > 0 && (
                      <div
                        onClick={() => handleDeleteCondition(conditionIndex)}
                        className="cursor-pointer"
                      >
                        <IconsTrash />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <div
                      className={`w-full ${
                        weatherConditionDisplay[conditionIndex]
                          ? "text-[#6B7280]"
                          : "text-[#030712]"
                      }`}
                    >
                      <button
                        onClick={() => {
                          handleWeatherDisplayChange(conditionIndex);
                        }}
                        className="flex justify-between items-center border border-[#D1D5DB] rounded-lg py-[14px] px-3 w-full"
                      >
                        <span
                          className={`font-nunito font-normal leading-normal text-base ${
                            weatherConditionDisplay[conditionIndex]
                              ? "text-[#030712]"
                              : "text-[#6B7280]"
                          }`}
                        >
                          {weatherConditionDisplay[conditionIndex] ||
                            "Choose weather condition..."}
                        </span>

                        <IconChevronDown />
                      </button>
                      {isWeatherOpen[conditionIndex] && (
                        <ul
                          className={`mt-2 overflow-y-auto custom-scrollbar absolute z-10 shadow-lg bg-white w-full rounded-lg transition-max-height duration-300 ${
                            isWeatherOpen[conditionIndex]
                              ? "max-h-40 border border-[#D1D5DB]"
                              : "hidden"
                          }`}
                        >
                          {WEATHERS.map((weather, indexwather) => (
                            <li
                              key={`${indexwather}-${weather.title}`}
                              onClick={() => {
                                handleWeatherDisplayChange(
                                  conditionIndex,
                                  <span className="flex items-center gap-2">
                                    {weather.icons}
                                    {weather.title}
                                  </span>
                                );
                                setWeatherCondition((prevState) => {
                                  const newState = [...prevState];
                                  newState[conditionIndex] = weather.title;
                                  return newState;
                                });

                                handleConditionChange(
                                  conditionIndex,
                                  weather.title,
                                  conditionDescription[conditionIndex]
                                );
                              }}
                              className="flex items-center gap-2 py-[14px] px-3 hover:bg-emerald-500 hover:text-white cursor-pointer"
                            >
                              {weather.icons} {weather.title}
                            </li>
                          ))}
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
                      value={conditionDescription[conditionIndex] || ""}
                      onChange={(e) => {
                        setConditionDescription((prevState) => {
                          const newState = [...prevState];
                          newState[conditionIndex] = e.target.value;
                          return newState;
                        });

                        handleConditionChange(
                          conditionIndex,
                          weatherCondition[conditionIndex],
                          e.target.value
                        );
                      }}
                      className="border border-[#D1D5DB] rounded-lg mt-1 py-[14px] pl-11 pr-11 w-full block placeholder:text-[#6B7280]"
                      placeholder="Create an recommended action for users..."
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <IconsEdit />
                    </div>
                  </div>
                </div>
              </div>
              {conditionIndex !== lastIndex && (
                <div className="h-[1px] w-full bg-neutral-200 mb-2" />
              )}
            </React.Fragment>
          );
        })}
        <div>
          <button
            className="flex items-center gap-2"
            disabled={condition.some(
              (item) => !item.weatherCondition || !item.conditionDescription
            )}
            onClick={() => {
              setCondition([
                ...condition,
                {
                  weatherCondition: "",
                  conditionDescription: "",
                },
              ]);
            }}
          >
            <IconsPlusAdd
              fill={
                condition.some(
                  (item) => !item.weatherCondition || !item.conditionDescription
                )
                  ? "#7DD3FC"
                  : "#10B981"
              }
            />
            <span
              className={`font-nunito font-bold text-base leading-6 ${
                condition.some(
                  (item) => !item.weatherCondition || !item.conditionDescription
                )
                  ? "text-[#7DD3FC]"
                  : "text-[#10B981]"
              }`}
            >
              Add Condition
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CWC_Form;
