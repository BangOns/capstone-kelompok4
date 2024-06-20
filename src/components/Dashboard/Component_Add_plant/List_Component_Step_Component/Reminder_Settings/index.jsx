"use client";

import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncPrevStep,
} from "@/libs/redux/Slice/DashboardSlice";
import CancelButtonPlant from "../../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../../Component_Buttons/next_buton_plant";
import Message_Error from "../../../../Component_Message/Message_Error";
import WF_Form from "./WF_Form";
import CWC_Form from "./CWC_Form";
import { FuncAddInputPlantInformation } from "@/libs/redux/Slice/AddPlantSlice";
import { ValidateReminderSettings } from "../../../../../utils/Validate_AddPlant/Validate_ReminderSettings";

const Reminder_Settings = () => {
  const { ReminderSettingsInput, dataPlantNew } = useSelector(
    (state) => state.addplant
  );
  const dispatch = useDispatch();

  const handleClickPrev = () => {
    dispatch(FuncPrevStep());
  };

  const handleClickNext = () => {
    const checkValidateReminderSettings = ValidateReminderSettings(
      ReminderSettingsInput.watering_schedule
    );
    if (!checkValidateReminderSettings) {
      dispatch(FuncMessagePlantError(true));
    } else {
      const ConvertWeatherConditionsToString =
        ReminderSettingsInput.watering_schedule.weather_condition.join(",");
      const ConvertConditionDescriptionToString =
        ReminderSettingsInput.watering_schedule.condition_description.join(",");

      const dataInputReminderSettings = {
        ...ReminderSettingsInput,
        watering_schedule: {
          ...ReminderSettingsInput.watering_schedule,

          weather_condition: ConvertWeatherConditionsToString,
          condition_description: ConvertConditionDescriptionToString,
        },
      };
      dispatch(
        FuncAddInputPlantInformation({
          ...dataPlantNew,
          ...dataInputReminderSettings,
        })
      );
      dispatch(FuncNextStep());
    }
  };

  return (
    <Fragment>
      <section className="mt-6 p-4 border rounded-[10px] text-black">
        <div className="grid grid-cols-2 justify-center items-center gap-4">
          <div className="h-full border border-[#E5E7EB] rounded-md p-4">
            <h3 className="text-[#030712] text-xl font-nunito font-bold leading-normal mb-6">
              Watering Frequency
            </h3>
            <WF_Form />
          </div>

          <CWC_Form />
        </div>

        <div className="flex justify-between mt-10">
          <CancelButtonPlant />
          <div className=" flex">
            <PreviousButtonPlant
              handleClick={handleClickPrev}
              disableOn={false}
            />
            <NextButtonPlant disabledOn={false} handleClick={handleClickNext} />
          </div>
        </div>
      </section>
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </Fragment>
  );
};

export default Reminder_Settings;
