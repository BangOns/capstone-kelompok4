import React, { useEffect } from "react";
import Sunlight from "./Select_Option/Sunlight";
import Planting_Time from "./Select_Option/Planting_Time";
import { useDispatch, useSelector } from "react-redux";
// import { FuncPlantInformationInput } from "../../../../../libs/redux/Slice/AddPlantSlice";
import { FuncPlantInformationInputEdit } from "../../../../../libs/redux/Slice/EditPlantSlice";

export default function Plant_Input_RadioButton() {
  const { PlantInformationInputEdit, dataPlantEdit } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  const arrDataInputRadioButton = [
    { label: "Non-Toxic Plant", id_toxic: "non-toxic" },
    { label: "Toxic Plant", id_toxic: "toxic" },
  ];

  return (
    <article className="w-full pt-6 flex justify-between gap-6    ">
      <div className="basis-1/2 items-center flex gap-2 w-full">
        {arrDataInputRadioButton?.map((items, id) => (
          <div className=" flex gap-[10px]" key={id}>
            <input
              type="radio"
              name="plants"
              value={items.id_toxic}
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
