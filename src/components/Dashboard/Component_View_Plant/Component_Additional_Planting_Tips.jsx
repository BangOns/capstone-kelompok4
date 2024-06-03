import React from "react";
import Image from "next/image";
// import { IconsImport } from "../../../../../utils/IconsImport";
// import { FuncToIndex } from "../../../../../libs/redux/Slice/DashboardSlice";
// import { useDispatch } from "react-redux";

export default function Component_Additional_Planting_Tips() {
  // const dispatch = useDispatch();
  return (
    <section className="mt-6">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">Additional Planting Tips</h1>
        {/* <Image
          src={IconsImport.IconsEditFinishing}
          alt="edit"
          className="cursor-pointer"
          onClick={() => dispatch(FuncToIndex(4))}
        /> */}
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
