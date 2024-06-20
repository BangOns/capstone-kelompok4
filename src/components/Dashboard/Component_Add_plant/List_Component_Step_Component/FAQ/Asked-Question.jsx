"use client";

import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";
import Answer from "./AnswerQuestion";
import { useState, useEffect } from "react";

export default function AskedQuestion({
  id,
  question,
  answer,
  onDelete,
  onUpdate,
}) {
  const [mini, setMini] = useState(false);

  function handleMinimize() {
    setMini(!mini);
  }
  
  function stripHtmlTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  }

  return (
    <div>
      <div
        className={`${
          mini ? "hidden" : ""
        } w-full border border-neutral-300 rounded-xl pb-4`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-[#030712] font-nunito-bold text-[14px]">
            Frequently Asked Questions
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="cursor-pointer" onClick={() => onDelete(id)}>
              <Image
                className=""
                src={IconsImport.IconsDeletePlants}
                alt="delete"
              />
            </div>
            <div className="cursor-pointer" onClick={handleMinimize}>
              <Image
                className={`transition-all duration-300 ease-in-out ${
                  mini ? "" : "rotate-180"
                }`}
                src={IconsImport.IconsDropdown}
                alt="minimize"
              />
            </div>
          </div>
        </div>

        <div className="w-full gap-4 flex items-center justify-between px-4">
          <Answer
            name="Questions"
            redux="question"
            value={question}
            id={id}
            onUpdate={onUpdate}
          />
          <Answer
            name="Answers"
            redux="answer"
            value={answer}
            id={id}
            onUpdate={onUpdate}
          />
        </div>
      </div>

      <div
        className={` ${
          mini ? "" : "hidden"
        } rounded-lg border border-neutral-300 my-5 max-w-full h-[88px] flex justify-between items-center px-4`}
      >
        <div>
          <div className="text-[#030712] font-nunito-bold text-[14px] my-1">
            Q: {stripHtmlTags(question)}
          </div>
          <div className="text-[#030712] text-[14px] font-nunito my-1">
            <span className="font-nunito-bold">A:</span>{" "}
            {stripHtmlTags(answer)}
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="cursor-pointer" onClick={() => onDelete(id)}>
            <Image
              className=""
              src={IconsImport.IconsDeletePlants}
              alt="delete"
            />
          </div>
          <div className="cursor-pointer" onClick={handleMinimize}>
            <Image
              className={`transition-all duration-300 ease-in-out ${
                mini ? "" : "rotate-180"
              }`}
              src={IconsImport.IconsDropdown}
              alt="minimize"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
