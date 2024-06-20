import React, { useEffect, useState } from "react";

import Harvest_Duration from "./Select_Option/Harvest_Duration";
import Climate_Condition from "./Select_Option/Climate_Condition";
import Plant_Category from "./Select_Option/Plant_Category";
import { useDispatch, useSelector } from "react-redux";

import { FuncPlantInformationInputEdit } from "../../../../../libs/redux/Slice/EditPlantSlice";
import { FuncMessageErrorPlantName } from "../../../../../libs/redux/Slice/DashboardSlice";
export default function Plant_Input() {
  const dispatch = useDispatch();
  const { dataPlantNewEdit, dataPlantEditFullField } = useSelector(
    (state) => state.editplant
  );

  const { messageErrorPlantName } = useSelector((state) => state.dashboard);
  const regex = /^[^-]+-[^-]+$/;
  function validateName(e) {
    if (regex.test(e.target.value)) {
      dispatch(FuncMessageErrorPlantName(false));
    }
    dispatch(
      FuncPlantInformationInputEdit({
        name: "name",
        value: e.target.value,
      })
    );
  }
  useEffect(() => {
    if (dataPlantEditFullField.data) {
      dispatch(
        FuncPlantInformationInputEdit({
          name: "name",
          value: dataPlantNewEdit.name
            ? dataPlantNewEdit.name
            : dataPlantEditFullField.data.name,
        })
      );
    }
  }, [dataPlantEditFullField]);
  return (
    <article className="w-full pt-6 flex justify-between">
      <section className="basis-[23%] w-full">
        <label htmlFor="" className="font-nunito-bold text-sm pb-1">
          Plant Name - Family Name <span className="text-red-500">*</span>
        </label>
        <div
          className={`w-full px-3 py-[14px] border rounded-lg ${
            messageErrorPlantName ? "border-red-500" : ""
          }`}
        >
          <input
            type="text"
            value={dataPlantNewEdit.name && dataPlantNewEdit.name}
            placeholder="Plant name - Family name"
            className="w-full border-0 focus:ring-0 outline-none text-base font-nunito bg-white"
            onChange={validateName}
          />
        </div>
        {messageErrorPlantName && (
          <p className="text-red-500 text-xs">
            Plant names must have a ' - ' symbol in the middle
          </p>
        )}
      </section>
      <Plant_Category />
      <Harvest_Duration />
      <Climate_Condition />
    </article>
  );
}
