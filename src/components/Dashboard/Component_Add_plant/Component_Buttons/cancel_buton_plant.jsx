import React from "react";
import { useDispatch } from "react-redux";
import { FuncCancelAddPlant } from "../../../../libs/redux/Slice/DashboardSlice";

export default function CancelButtonPlant() {
  const dispatch = useDispatch();
  return (
    <div className="">
      <button
        className="text-emerald-500 hover:text-emerald-600 p-[14px]"
        onClick={() => {
          dispatch(FuncCancelAddPlant(true));
        }}
      >
        Cancel
      </button>
    </div>
  );
}
