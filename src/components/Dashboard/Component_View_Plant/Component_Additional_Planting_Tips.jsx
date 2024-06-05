import React from "react";
import Image from "next/image";

export default function Component_Additional_Planting_Tips() {
  return (
    <section className="mt-6">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">Additional Planting Tips</h1>
      </header>
      <article className="w-full border border-gray-200 rounded-[10px] p-4">
        <div className="">
          <h1>Header</h1>
          <ul className="list-disc px-4">
            <li>test 1</li>
            <li>test 2</li>
          </ul>
          <h1>Header2</h1>
          <ul className="list-disc px-4">
            <li>test 1</li>
            <li>test 2</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
