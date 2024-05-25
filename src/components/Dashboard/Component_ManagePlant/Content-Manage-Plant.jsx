import React from "react";
import TablePlant from "./Table-Plant/TablePlant";

export default function ContentManagePlant() {
  return (
    <article className="w-full pt-[28.5px] ">
      <section className="overflow-x-auto rounded-s-2xl rounded-e-2xl">
        <TablePlant />
      </section>
      <section className="w-full h-[52px] flex items-center justify-between">
        <p className="text-sm font-nunito">Showing 1 to 10 of 100 entries</p>
        <div className="flex gap-4">
          <button className="p-[14px] font-nunito-bold text-base text-gray-400">
            Previous
          </button>
          <button className="p-[14px] font-nunito-bold text-base text-emerald-500">
            Next
          </button>
        </div>
      </section>
    </article>
  );
}
