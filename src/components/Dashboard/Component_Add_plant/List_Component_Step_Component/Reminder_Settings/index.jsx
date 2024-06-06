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
} from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch } from "react-redux";
import Message_Error from "../../../../Component_Message/Message_Error";

const Reminder_Settings = () => {
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
  const handleClickPrev = () => {
    dispatch(FuncPrevStep());
  };
  const handleClickNext = () => {
    dispatch(FuncMessagePlantError(true));
    dispatch(FuncNextStep());
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
