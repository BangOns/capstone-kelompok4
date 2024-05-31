import React from "react";

export default function Plant_Input() {
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
          />
        </div>
      </section>
      <section className="basis-[23%] w-full">
        <label htmlFor="" className="font-nunito-bold text-sm pb-1">
          Plant Category <span className="text-red-500">*</span>
        </label>
        <div className="w-full px-3 py-[14px] border rounded-lg">
          <select name="" id="" className="w-full focus:ring-0 outline-none">
            <option value="">Select Category</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
          </select>
        </div>
      </section>
      <section className="basis-[23%] w-full">
        <label htmlFor="" className="font-nunito-bold text-sm pb-1">
          Harvest Duration <span className="text-red-500">*</span>
        </label>
        <div className="w-full px-3 py-[14px] border rounded-lg">
          <select name="" id="" className="w-full focus:ring-0 outline-none">
            <option value="">1 Month</option>
            <option value="">Category 1</option>
          </select>
        </div>
      </section>
      <section className="basis-[23%] w-full">
        <label htmlFor="" className="font-nunito-bold text-sm pb-1">
          Climate Condition <span className="text-red-500">*</span>
        </label>
        <div className="w-full px-3 py-[14px] border rounded-lg">
          <select name="" id="" className="w-full focus:ring-0 outline-none">
            <option value="">Dry</option>
            <option value="">Category 1</option>
          </select>
        </div>
      </section>
    </article>
  );
}
