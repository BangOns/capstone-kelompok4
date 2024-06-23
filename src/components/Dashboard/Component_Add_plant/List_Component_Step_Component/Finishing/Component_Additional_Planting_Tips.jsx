import React from "react";
import Image from "next/image";
import { IconsImport } from "../../../../../utils/IconsImport";
import { FuncToIndex } from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Component_Additional_Planting_Tips() {
  const dispatch = useDispatch();
  const { dataPlantNew } = useSelector((state) => state.addplant);
  const additionalPlantTips = dataPlantNew?.additional_tips || "";

  return (
    <section className="mt-6">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">Additional Planting Tips</h1>
        <Image
          src={IconsImport.IconsEditFinishing}
          alt="edit"
          className="cursor-pointer"
          height={24}
          width={24}
          onClick={() => dispatch(FuncToIndex(4))}
        />
      </header>
      <article className="w-full border border-gray-200 rounded-[10px] p-4">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: additionalPlantTips }}
        />
      </article>
    </section>
  );
}
