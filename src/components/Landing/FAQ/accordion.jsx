import { useEffect, useRef } from "react";
import {
  IconChevronDown,
  IconChevronUp,
} from "../../../utils/Component-Icons-FAQ";

const Accordion = ({ number, title, answer, open, toggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (open) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [open]);

  return (
    <div
      className={`border-b border-[#C7C9D9] py-9 px-14 ${
        open ? "bg-[#10B981]" : ""
      }`}
    >
      <button
        className="w-full flex justify-between items-center "
        onClick={toggle}
      >
        <p className="flex items-center gap-[106px]">
          <span
            className={`font-nunito-bold text-4xl leading-normal ${
              open ? "text-white" : "text-black"
            }`}
          >
            {number}
          </span>
          <span
            className={`font-nunito-bold text-2xl leading-normal ${
              open ? "text-white" : "text-black"
            }`}
          >
            {title}
          </span>
        </p>
        <div className="transform transition-transform duration-300">
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </div>
      </button>
      <div
        ref={contentRef}
        className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-0"
      >
        <p className="font-nunito text-xl leading-normal font-semibold text-gray-100 opacity-90 max-w-[750px] ml-[150px] mt-9">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
