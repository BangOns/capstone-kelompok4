import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantCharateristic } from "../../../../../../libs/redux/Slice/AddPlantSlice";

export default function Plant_Wide() {
  const { plant_characteristic } = useSelector(
    (state) => state.addplant.PlantInformationInput
  );
  const [count, countSet] = useState(plant_characteristic.wide);
  const dispatch = useDispatch();
  function handleCountPlus() {
    dispatch(FuncPlantCharateristic({ operatorWide: "plus" }));
  }
  function handleCountMinus() {
    dispatch(FuncPlantCharateristic({ operatorWide: "minus" }));
  }
  return (
    <div className="w-[211px] xl:w-1/2 ">
      <h2 className="text-sm font-nunito-bold pb-1">
        Wide<span className="text-red-500">*</span>
      </h2>
      <div className="w-full items-center flex justify-between py-[14px] px-3 border border-slate-950 rounded-lg">
        <FiMinus className="cursor-pointer" onClick={handleCountMinus} />
        <input
          type="number"
          value={plant_characteristic.wide}
          placeholder="0"
          className="text-center outline-none border-0"
          onChange={(e) => {
            dispatch(
              FuncPlantCharateristic({
                name: "wide",
                value: parseInt(e.target.value),
              })
            );
          }}
        />
        <FiPlus className="cursor-pointer" onClick={handleCountPlus} />
      </div>
    </div>
  );
}
