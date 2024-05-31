import React from "react";
import Image from "next/image";
import { ImageImport } from "../../../../../utils/ImageImport";
import { IconsImport } from "../../../../../utils/IconsImport";
import { ToIndex } from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch } from "react-redux";

export default function Component_Plant_Information() {
  const dispatch = useDispatch();
  return (
    <section className="w-full">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">Plant Information</h1>
        <Image
          src={IconsImport.IconsEditFinishing}
          alt="edit"
          className="cursor-pointer"
          onClick={() => dispatch(ToIndex(1))}
        />
      </header>
      <section className="w-full p-4 border-slate-200 border rounded-[10px] flex gap-6">
        <article className="flex  gap-4 items-center">
          <figure className="w-[60px] h-[60px] rounded-xl border flex items-end justify-center bg-gray-200 overflow-hidden bg-gradient-to-b from-50% from-white to-gray-200/60">
            <Image src={ImageImport.ImagePlants} alt="Image plants" />
          </figure>
          <div className="">
            <h4 className="font-nunito-bold">Tomato</h4>
            <p className="text-sm font-nunito italic text-slate-500">
              Solanaceae
            </p>
          </div>
        </article>
        <div className="w-px h-[60px] bg-slate-500"></div>
        <article className="flex gap-10 items-center">
          <section>
            <h4 className="text-sm font-nunito text-slate-500">
              Plant Category
            </h4>
            <p className="font-nunito-bold ">Fruits</p>
          </section>
          <section>
            <h4 className="text-sm font-nunito text-slate-500">Toxicity</h4>
            <p className="font-nunito-bold ">Non-Toxic Plant</p>
          </section>
          <section>
            <h4 className="text-sm font-nunito text-slate-500">
              Harvest Duration
            </h4>
            <p className="font-nunito-bold ">5 Months</p>
          </section>
          <section>
            <h4 className="text-sm font-nunito text-slate-500">
              Climate Condition
            </h4>
            <p className="font-nunito-bold ">Dry</p>
          </section>
        </article>
      </section>
    </section>
  );
}
