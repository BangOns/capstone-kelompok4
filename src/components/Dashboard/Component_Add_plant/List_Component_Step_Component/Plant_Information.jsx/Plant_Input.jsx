import React from "react";

import Harvest_Duration from "./Select_Option/Harvest_Duration";
import Climate_Condition from "./Select_Option/Climate_Condition";
import Plant_Category from "./Select_Option/Plant_Category";
import { useDispatch } from "react-redux";
import { FuncPlantInformationInput } from "../../../../../libs/redux/Slice/AddPlantSlice";
export default function Plant_Input() {
  const dispatch = useDispatch();
  return (
    <article className="w-full pt-6 flex justify-between">
      <section className="basis-[23%] w-full">
        <label htmlFor="" className="font-nunito-bold text-sm pb-1">
          Plant Name - Family Name <span className="text-red-500">*</span>
        </label>
        <div className="w-full px-3 py-[14px] border rounded-lg">
          <input
            type="text"
            placeholder="Plant name - Family name"
            className="w-full border-0 focus:ring-0 outline-none text-base font-nunito"
            onChange={(e) =>
              dispatch(
                FuncPlantInformationInput({
                  name: "plantName",
                  value: e.target.value,
                })
              )
            }
          />
        </div>
      </section>
      <Plant_Category />
      <Harvest_Duration />
      <Climate_Condition />
    </article>
  );
}
