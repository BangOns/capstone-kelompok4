"use client";

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FuncMessagePlantError } from "@/libs/redux/Slice/DashboardSlice";
import CancelButtonPlant from "../../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../../Component_Buttons/next_buton_plant";
import Message_Error from "../../../../Component_Message/Message_Error";
import WF_Form from "./WF_Form";
import CWC_Form from "./CWC_Form";
import {
  FuncNextStepEdit,
  FuncPrevStepEdit,
} from "../../../../../libs/redux/Slice/DashboardSlice";
import { ValidateReminderSettings } from "../../../../../utils/Validate_AddPlant/Validate_ReminderSettings";
import { FuncReminderSettingsInputEdit } from "../../../../../libs/redux/Slice/EditPlantSlice";

const Reminder_Settings = () => {
  const dispatch = useDispatch();
  const { dataPlantNewEdit } = useSelector((state) => state.editplant);

  const handleClickPrev = () => {
    dispatch(FuncPrevStepEdit());
  };

  useEffect(() => {
    if (
      typeof dataPlantNewEdit.watering_schedule.condition_description ===
      "string"
    ) {
      const ConvertConditionDescriptionToArray =
        dataPlantNewEdit.watering_schedule.condition_description.split(",");
      dispatch(
        FuncReminderSettingsInputEdit({
          name: "condition_description",
          value: ConvertConditionDescriptionToArray,
        })
      );
    }

    if (
      typeof dataPlantNewEdit.watering_schedule.weather_condition === "string"
    ) {
      const ConvertWeatherConditionsToArray =
        dataPlantNewEdit.watering_schedule.weather_condition.split(",");
      dispatch(
        FuncReminderSettingsInputEdit({
          name: "weather_condition",
          value: ConvertWeatherConditionsToArray,
        })
      );
    }
  }, []);

  const handleClickNext = () => {
    const checkValidateReminderSettings = ValidateReminderSettings(
      dataPlantNewEdit.watering_schedule
    );
    if (!checkValidateReminderSettings) {
      dispatch(FuncMessagePlantError(true));
    } else {
      const ConvertWeatherConditionsToString =
        dataPlantNewEdit.watering_schedule.weather_condition.join(",");

      const ConvertConditionDescriptionToString =
        dataPlantNewEdit.watering_schedule.condition_description.join(",");

      dispatch(
        FuncReminderSettingsInputEdit({
          name: "weather_condition",
          value: ConvertWeatherConditionsToString,
        })
      );

      dispatch(
        FuncReminderSettingsInputEdit({
          name: "condition_description",
          value: ConvertConditionDescriptionToString,
        })
      );
    }
    dispatch(FuncNextStepEdit());
  };

  return (
    <Fragment>
      <section className="mt-6 p-4 border rounded-[10px]">
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
