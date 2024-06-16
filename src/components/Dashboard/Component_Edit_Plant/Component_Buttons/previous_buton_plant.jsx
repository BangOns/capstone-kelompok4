import React from "react";

export default function PreviousButtonPlant({ handleClick, disableOn }) {
  return (
    <button
      type="button"
      disabled={disableOn}
      className={`ml-auto rounded-[14px] bg-green-100 hover:border hover:border-emerald-600 text-emerald-500 transition-all  font-nunito-bold p-[14px] gap-4 w-[158px] disabled:opacity-50 disabled:hover:border-0`}
      onClick={handleClick}
    >
      Previous
    </button>
  );
}
