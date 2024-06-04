import { useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

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
      className={`border-b border-[#C7C9D9] py-4 px-3 md:py-5 md:px-5 lg:py-9 lg:px-14 ${
        open ? "bg-[#10B981]" : ""
      }`}
    >
      <button
        className="w-full flex justify-between items-center gap-2"
        onClick={toggle}
      >
        <p className="flex items-center gap-5 sm:gap-10 md:gap-16 lg:gap-[106px]">
          <span
            className={`font-nunito-bold text-base sm:text-xl md:text-2xl lg:text-4xl leading-normal ${
              open ? "text-white" : "text-black"
            }`}
          >
            {number}
          </span>
          <span
            className={`font-nunito-bold text-start text-sm sm:text-base md:text-lg lg:text-2xl leading-normal ${
              open ? "text-white" : "text-black"
            }`}
          >
            {title}
          </span>
        </p>
        <div className="transform transition-transform duration-300">
          <BsChevronDown
            className={`h-5 w-5 md:h-8 md:w-8 lg:h-12 lg:w-12 transition-transform duration-300 ease-in-out ${
              open ? "text-white -rotate-180" : "text-[#030712] rotate-0"
            }`}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="transition-max-height duration-300 ease-in-out overflow-hidden max-h-0"
      >
        <p className="font-nunito text-xs md:text-base lg:text-xl leading-normal font-medium lg:font-semibold text-gray-100 opacity-90 max-w-[750px] ml-10 md:ml-[92px] lg:ml-[150px] mt-3 md:mt-5 lg:mt-9">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
