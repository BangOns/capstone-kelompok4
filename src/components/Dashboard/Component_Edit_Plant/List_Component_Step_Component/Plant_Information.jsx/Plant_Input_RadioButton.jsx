import React from "react";
import Sunlight from "./Select_Option/Sunlight";
import Planting_Time from "./Select_Option/Planting_Time";

export default function Plant_Input_RadioButton() {
  return (
    <article className="w-full pt-6 flex justify-between gap-6    ">
      <div className="basis-1/2 items-center flex gap-2 w-full">
        <div className=" flex gap-[10px]">
          <input type="radio" name="plants" id="non-toxic" />
          <label htmlFor="non-toxic" className="font-nunito text-sm">
            Non-Toxic Plant
          </label>
        </div>
        <div className=" flex gap-[10px]">
          <input type="radio" name="plants" id="toxic" />
          <label htmlFor="toxic" className="font-nunito text-sm">
            Toxic Plant
          </label>
        </div>
      </div>
      <div className="basis-1/2 flex w-full justify-between gap-9">
        <Sunlight />
        <Planting_Time />
      </div>
    </article>
  );
}
