import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import {
  FuncPlantCharateristicEdit,
  FuncPlantInformationInputEdit,
} from "../../../../../../libs/redux/Slice/EditPlantSlice";

export default function Plant_Height() {
  const { dataPlantNewEdit, dataPlantEditFullField } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  function handleCountPlus() {
    dispatch(FuncPlantCharateristicEdit({ operatorHeight: "plus" }));
  }
  function handleCountMinus() {
    dispatch(FuncPlantCharateristicEdit({ operatorHeight: "minus" }));
  }
  useEffect(() => {
    if (dataPlantEditFullField.data) {
      dispatch(
        FuncPlantInformationInputEdit({
          name: "plant_characteristic",
          value: dataPlantNewEdit.plant_characteristic
            ? dataPlantNewEdit.plant_characteristic
            : dataPlantEditFullField.data.plant_characteristic,
        })
      );
    }
  }, [dataPlantEditFullField]);
  return (
    <div className="w-[211px] xl:w-1/2 ">
      <h2 className="text-sm font-nunito-bold pb-1">
        Height<span className="text-red-500">*</span>
      </h2>
      <div className="w-full items-center flex justify-between py-[14px] px-3 border border-neutral-300 rounded-lg">
        <FiMinus onClick={handleCountMinus} className="cursor-pointer" />
        <input
          type="number"
          value={dataPlantNewEdit.plant_characteristic?.height}
          placeholder="0"
          className="text-center outline-none border-0 bg-white"
          onChange={(e) => {
            dispatch(
              FuncPlantCharateristicEdit({
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
