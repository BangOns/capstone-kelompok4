import React from "react";

export default function Plant_Input_RadioButton() {
  return (
    <article className="w-full pt-6 flex  gap-2 ">
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
    </article>
  );
}
