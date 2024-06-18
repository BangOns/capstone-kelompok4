import React, { useEffect } from "react";
import Sunlight from "./Select_Option/Sunlight";
import Planting_Time from "./Select_Option/Planting_Time";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantInformationInputEdit } from "../../../../../libs/redux/Slice/EditPlantSlice";

export default function Plant_Input_RadioButton() {
  const { dataPlantEditFullField, dataPlantNewEdit } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  const arrDataInputRadioButton = [
    { label: "Non-Toxic Plant", id_toxic: "non-toxic" },
    { label: "Toxic Plant", id_toxic: "toxic" },
  ];
  const findToxicPlant =
    dataPlantNewEdit && (dataPlantNewEdit.is_toxic ? "toxic" : "non-toxic");
  useEffect(() => {
    if (dataPlantEditFullField.data) {
      dispatch(
        FuncPlantInformationInputEdit({
          name: "is_toxic",
          value: dataPlantNewEdit.is_toxic
            ? dataPlantNewEdit.is_toxic
            : dataPlantEditFullField.data.is_toxic,
        })
      );
    }
  }, [dataPlantEditFullField]);
  return (
    <article className="w-full pt-6 flex justify-between gap-6    ">
      <div className="basis-1/2 items-center flex gap-2 w-full">
        {arrDataInputRadioButton?.map((items, id) => (
          <div className=" flex gap-[10px]" key={id}>
            <input
              type="radio"
              name="plants"
              defaultChecked={findToxicPlant !== items.id_toxic ? true : false}
              value={dataPlantNewEdit.is_toxic ? "toxic" : "non-toxic"}
              id={items.id_toxic}
              onChange={(e) => {
                const value = e.target.value;
                dispatch(
                  FuncPlantInformationInputEdit({
                    name: "is_toxic",
                    value: value === "toxic" ? true : false,
                  })
                );
              }}
            />
            <label htmlFor={items.id_toxic} className="font-nunito text-sm">
              {items.label}
            </label>
          </div>
        ))}
      </div>
      <div className="basis-1/2 flex w-full justify-between gap-9">
        <Sunlight />
        <Planting_Time />
      </div>
    </article>
  );
}
