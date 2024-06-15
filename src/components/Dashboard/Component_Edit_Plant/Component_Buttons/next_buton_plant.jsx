import React from "react";

export default function NextButtonPlant({ handleClick, disabledOn, finish }) {
  return (
    <button
      type={finish ? "submit" : "button"}
      disabled={disabledOn}
      className="ml-[16px] rounded-[14px] bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 transition-all text-white font-nunito-bold p-[14px] gap-4 w-[158px]"
      onClick={handleClick}
    >
      {finish ? "Save" : "Next"}
    </button>
  );
}
