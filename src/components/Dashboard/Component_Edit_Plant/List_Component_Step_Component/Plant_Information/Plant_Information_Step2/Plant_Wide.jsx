import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  FuncPlantCharateristicEdit,
  FuncPlantInformationInputEdit,
} from "../../../../../../libs/redux/Slice/EditPlantSlice";

export default function Plant_Wide() {
  const { dataPlantNewEdit, dataPlantEditFullField } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  function handleCountPlus() {
    dispatch(FuncPlantCharateristicEdit({ operatorWide: "plus" }));
  }
  function handleCountMinus() {
    dispatch(FuncPlantCharateristicEdit({ operatorWide: "minus" }));
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
        Wide<span className="text-red-500">*</span>
      </h2>
      <div className="w-full items-center flex justify-between py-[14px] px-3 border border-neutral-300 rounded-lg">
        <FiMinus className="cursor-pointer" onClick={handleCountMinus} />
        <input
          type="number"
          value={dataPlantNewEdit.plant_characteristic?.wide}
          placeholder="0"
          className="text-center outline-none border-0"
          onChange={(e) => {
            dispatch(
              FuncPlantCharateristicEdit({
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
