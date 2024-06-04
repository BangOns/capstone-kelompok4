"use client";

import React, { Fragment, useState } from "react";
import { IconsPlusAdd } from "@/utils/Component-Icons-Reminder-settings";
import WF_Form from "./WF_Form";
import CWC_Form from "./CWC_Form";
import CancelButtonPlant from "../../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../../Component_Buttons/next_buton_plant";
import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncPrevStep,
  FuncReminderSettings,
} from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch } from "react-redux";
import Message_Error from "../../../../Component_Message/Message_Error";

const Reminder_Settings = () => {
  const [wateringFrequency, setWateringFrequency] = useState(0);
  const [wateringUnit, setWateringUnit] = useState("");
  const [wateringAmount, setWateringAmount] = useState(0);
  const [wateringAmountUnit, setWateringAmountUnit] = useState("");
  const [wateringTime, setWateringTime] = useState("00:00");
  const dispatch = useDispatch();
  const [conditions, setConditions] = useState([
    { ifTheWather: "", whatYouNeed: "" },
  ]);

  const handleConditionChange = (index, ifTheWather, whatYouNeed) => {
    const newConditions = [...conditions];
    newConditions[index] = { ifTheWather, whatYouNeed };
    setConditions(newConditions);
  };

  const addCondition = () => {
    setConditions([...conditions, { ifTheWather: "", whatYouNeed: "" }]);
  };

  const handleDeleteCondition = (index) => {
    const newConditions = conditions.filter((_, i) => i !== index);
    setConditions(newConditions);
  };

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
  const handleClickPrev = () => {
    dispatch(FuncPrevStep());
  };
  const handleClickNext = (ifTheWather, whatYouNeed) => {
    dispatch(FuncMessagePlantError(true));
    dispatch(FuncNextStep());
    dispatch(
      FuncReminderSettings(
        wateringFrequency,
        wateringUnit,
        wateringAmount,
        wateringAmountUnit,
        wateringTime,
        ifTheWather,
        whatYouNeed
      )
    );
  };

  return (
    <Fragment>
      <section>
        <div className="grid grid-cols-2 justify-center items-center gap-4">
          <div className="h-full border border-[#E5E7EB] rounded-md p-4">
            <h3 className="text-[#030712] text-xl font-nunito font-bold leading-normal mb-6">
              Watering Frequency
            </h3>
            <WF_Form
              wateringFrequency={wateringFrequency}
              wateringUnit={wateringUnit}
              setWateringUnit={setWateringUnit}
              wateringAmount={wateringAmount}
              setWateringAmount={setWateringAmount}
              wateringAmountUnit={wateringAmountUnit}
              setWateringAmountUnit={setWateringAmountUnit}
              wateringTime={wateringTime}
              setWateringTime={setWateringTime}
              handleIncrementAmmount={handleIncrementAmmount}
              handleDecrementAmmount={handleDecrementAmmount}
              handleIncrementFrequency={handleIncrementFrequency}
              handleDecrementFrequency={handleDecrementFrequency}
            />
          </div>

          <div className="h-full border border-[#E5E7EB] rounded-md p-4">
            <h3 className="text-[#030712] font-nunito font-bold text-xl leading-normal mb-6">
              Certain Weather Condition{" "}
              <span className="text-[#6B7280] font-normal text-sm italic">
                (if necessary)
              </span>
            </h3>
            <div className="flex flex-col gap-4">
              {conditions.map((_, index) => {
                const lastIndex = conditions.length - 1;
                return (
                  <React.Fragment key={index}>
                    <CWC_Form
                      index={index}
                      handleConditionChange={handleConditionChange}
                      handleDeleteCondition={handleDeleteCondition}
                    />
                    {index !== lastIndex && (
                      <div className="h-[1px] w-full bg-neutral-200 mb-2" />
                    )}
                  </React.Fragment>
                );
              })}

              <div>
                <button
                  className="flex items-center gap-2"
                  onClick={addCondition}
                  disabled={conditions.some(
                    (condition) =>
                      condition.ifTheWather === "" ||
                      condition.whatYouNeed === ""
                  )}
                >
                  <IconsPlusAdd
                    fill={
                      conditions.some(
                        (condition) =>
                          condition.ifTheWather === "" ||
                          condition.whatYouNeed === ""
                      )
                        ? "#7DD3FC"
                        : "#10B981"
                    }
                  />
                  <span
                    className={`font-nunito font-bold text-base leading-6 ${
                      conditions.some(
                        (condition) =>
                          condition.ifTheWather === "" ||
                          condition.whatYouNeed === ""
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
