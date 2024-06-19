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
  FuncPrevStep,
} from "../../../../libs/redux/Slice/DashboardSlice";
import { Fragment, useEffect, useState } from "react";
import Message_Error from "../../../Component_Message/Message_Error";
// import {
//   FuncAddFAQList,
//   FuncAddInputPlantInformation,
// } from "../../../../libs/redux/Slice/AddPlantSlice";
import {
  FuncEditInputPlantInformation,
  FuncEditFAQList,
} from "../../../../libs/redux/Slice/EditPlantSlice";

export default function Faq({ DataPlantEdit }) {
  const dispatch = useDispatch();
  const { FaQInputEdit, dataPlantEdit, faqList } = useSelector(
    (state) => state.editplant
  );
  const [questions, setQuestions] = useState([]);
  function handleClickPrev() {
    dispatch(FuncPrevStep());
  }
  function handleClickNext() {
    if (
      (FaQInpuEdit.asked === "" && FaQInputEdit.quest === "") ||
      !faqList.length
    ) {
      dispatch(FuncMessagePlantError(true));
    } else {
      const plant_faqs = [...questions];
      const updatedDataPlantEdit = {
        ...dataPlantEdit,
        plant_faqs,
      };

      // Dispatch update ke Redux
      dispatch(FuncAddInputPlantInformation(updatedDataPlantEdit));
      dispatch(FuncAddFAQList(plant_faqs));

      dispatch(FuncNextStep());
    }
  }

  function handleAddQuestion() {
    const newQuestion = {
      question: "",
      answer: "",
    };

    const updatedQuestions = [newQuestion, ...questions];

    // Perbarui state lokal
    setQuestions(updatedQuestions);

    // Dispatch ke Redux
    dispatch(FuncAddFAQList(updatedQuestions));
  }

  function handleDeleteQuestion(index) {
    const newData = [...questions];
    newData.splice(index, 1);

    const updateData = newData.map((items) => ({
      ...items,
    }));
    setQuestions(updateData);

    dispatch(FuncAddFAQList(updateData));
  }
  function handleUpdateQuestion(id, field, value) {
    const newData = [...questions];
    newData[id] = { ...newData[id], [field]: value };
    setQuestions(newData);
  }
  useEffect(() => {
    if (faqList.length !== 0) {
      setQuestions(faqList);
    }
  }, [faqList]);
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
