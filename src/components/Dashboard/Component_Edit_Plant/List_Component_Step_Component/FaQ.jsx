import IconsAdd from "@/utils/Component-Icons-FAQ/IconAdd";
import AskedQuestion from "./FAQ/Asked-Question";
import "./FAQ/faq.css";
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import { useDispatch, useSelector } from "react-redux";
import {
  FuncMessagePlantError,
  FuncNextStep,
  FuncNextStepEdit,
  FuncPrevStep,
  FuncPrevStepEdit,
} from "../../../../libs/redux/Slice/DashboardSlice";
import { Fragment, useEffect, useState } from "react";
import Message_Error from "../../../Component_Message/Message_Error";
// import {
//   FuncAddFAQList,
//   FuncAddInputPlantInformation,
// } from "../../../../libs/redux/Slice/AddPlantSlice";
import {
  FuncEditInputPlantInformation,
  FuncPlantInformationInputEdit,
} from "../../../../libs/redux/Slice/EditPlantSlice";

export default function Faq() {
  const dispatch = useDispatch();
  const { dataPlantNewEdit, dataPlantEditFullField } = useSelector(
    (state) => state.editplant
  );
  const [questions, setQuestions] = useState([]);
  function handleClickPrev() {
    let propsDataFaQ = [...questions];

    let plant_faqs = propsDataFaQ.map((item) => {
      let newItem = { ...item };
      if (newItem.hasOwnProperty("created_at")) {
        delete newItem.created_at;
        delete newItem.plant_id;
        delete newItem.id;
      }
      return newItem;
    });
    dispatch(
      FuncPlantInformationInputEdit({
        name: "plant_faqs",
        value: plant_faqs,
      })
    );
    dispatch(FuncPrevStepEdit());
  }
  function handleClickNext() {
    const validateQuestions = questions.some(
      (value) =>
        value.question === "" ||
        value.question.replace(/<(.|\n)*?>/g, "").trim().length === 0
    );
    const validateAnswer = questions.some(
      (value) =>
        value.answer === "" ||
        value.answer.replace(/<(.|\n)*?>/g, "").trim().length === 0
    );
    if (validateAnswer || validateQuestions) {
      dispatch(FuncMessagePlantError(true));
    } else {
      let propsDataFaQ = [...questions];

      let plant_faqs = propsDataFaQ.map((item) => {
        let newItem = { ...item };
        if (newItem.hasOwnProperty("created_at")) {
          delete newItem.created_at;
          delete newItem.plant_id;
          delete newItem.id;
        }
        return newItem;
      });
      dispatch(
        FuncPlantInformationInputEdit({
          name: "plant_faqs",
          value: plant_faqs,
        })
      );
      dispatch(FuncNextStepEdit());
    }
  }

  function handleAddQuestion() {
    const newQuestion = {
      question: "",
      answer: "",
    };
    if (!questions.length) {
      setQuestions([newQuestion]);
    } else {
      setQuestions([...questions, newQuestion]);
    }
  }

  function handleDeleteQuestion(index) {
    const newData = [...questions];
    newData.splice(index, 1);

    const updateData = newData.map((items) => ({
      ...items,
    }));
    setQuestions(updateData);
  }
  function handleUpdateQuestion(id, field, value) {
    const newData = [...questions];
    newData[id] = { ...newData[id], [field]: value };
    setQuestions(newData);
  }

  useEffect(() => {
    if (dataPlantEditFullField.data) {
      setQuestions(
        dataPlantNewEdit.plant_faqs
          ? dataPlantNewEdit.plant_faqs
          : dataPlantEditFullField.data.plant_faqs
      );
    }
  }, [dataPlantEditFullField]);
  return (
    <Fragment>
      <div className="rounded-lg border-2 mt-10">
        <div className="w-full max-h-[883px] p-4">
          <div className="scrollbar w-full max-h-[759px] overflow-y-auto">
            <div className="flex items-center justify-between p-4">
              <div
                className="flex justify-center gap-5 items-center text-[#10B981] cursor-pointer"
                onClick={handleAddQuestion}
              >
                <div className="">
                  <IconsAdd />
                </div>
                <div className="font-bold text-[16px] font-nunito-bold">
                  Add Frequently Asked Questions (FAQ)
                </div>
              </div>
              <div className="text-[#6B7280] text-sm">
                If you finish editing, it will{" "}
                <i className="text-[#10B981]">autosave</i> when you minimize the
                box
              </div>
            </div>
            {questions.length !== 0 &&
              questions.map((q, i) => (
                <div key={i} className="px-4 mb-4">
                  <AskedQuestion
                    question={q.question}
                    answer={q.answer}
                    id={i}
                    onDelete={handleDeleteQuestion}
                    onUpdate={handleUpdateQuestion}
                  />
                </div>
              ))}
          </div>

          <div className="flex justify-between mt-10 pr-4">
            <CancelButtonPlant />
            <div className=" flex">
              <PreviousButtonPlant
                handleClick={handleClickPrev}
                disableOn={false}
              />
              <NextButtonPlant
                disabledOn={false}
                handleClick={handleClickNext}
              />
            </div>
          </div>
        </div>
      </div>
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </Fragment>
  );
}
