import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantCharateristic } from "../../../../../../libs/redux/Slice/AddPlantSlice";

export default function Plant_Height() {
  const { plant_characteristic } = useSelector(
    (state) => state.addplant.PlantInformationInput
  );
  const dispatch = useDispatch();
  function handleCountPlus() {
    dispatch(FuncPlantCharateristic({ operatorHeight: "plus" }));
  }
  function handleCountMinus() {
    dispatch(FuncPlantCharateristic({ operatorHeight: "minus" }));
  }
  return (
    <div className="w-[211px] xl:w-1/2 ">
      <h2 className="text-sm font-nunito-bold pb-1">
        Height<span className="text-red-500">*</span>
      </h2>
      <div className="w-full items-center flex justify-between py-[14px] px-3 border border-neutral-300 rounded-lg">
        <FiMinus onClick={handleCountMinus} className="cursor-pointer" />
        <input
          type="number"
          value={plant_characteristic.height}
          placeholder="0"
          className="text-center outline-none border-0 bg-white"
          onChange={(e) => {
            dispatch(
              FuncPlantCharateristic({
                name: "height",
                value: parseInt(e.target.value),
              })
            );
          }}
        />
        <FiPlus onClick={handleCountPlus} className="cursor-pointer" />
      </div>
    </div>
  );
}
