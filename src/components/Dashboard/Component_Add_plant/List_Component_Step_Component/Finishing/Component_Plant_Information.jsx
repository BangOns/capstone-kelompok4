"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ImageImport } from "../../../../../utils/ImageImport";
import { IconsImport } from "../../../../../utils/IconsImport";
import { FuncToIndex } from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Component_Plant_Information() {
  const dispatch = useDispatch();
  const [imageThumb, imageThumbSet] = useState("");
  const { dataPlantNew } = useSelector((state) => state.addplant);
  const plantName = dataPlantNew.name.split("-")[0];
  const FamilyName = dataPlantNew.name.split("-")[1];
  const GetImageThumbnails =
    dataPlantNew.plant_images.length !== 0
      ? dataPlantNew.plant_images.filter((items) => items.is_primary === 1)
      : [];

  useEffect(() => {
    if (GetImageThumbnails.length !== 0) {
      imageThumbSet(GetImageThumbnails[0].file_name);
    }
  }, [GetImageThumbnails, dataPlantNew]);
  return (
    <section className="w-full">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">Plant Information</h1>
        <Image
          src={IconsImport.IconsEditFinishing}
          alt="edit"
          className="cursor-pointer"
          onClick={() => dispatch(FuncToIndex(1))}
        />
      </header>
      <section className="w-full p-4 border-slate-200 border rounded-[10px] flex gap-6">
        <article className="flex  gap-4 items-center">
          <figure className="w-[60px] h-[60px] rounded-xl border flex items-end justify-center bg-gray-200 overflow-hidden bg-gradient-to-b from-50% from-white to-gray-200/60">
            <Image
              src={imageThumb ? imageThumb : ImageImport.ImagePlants}
              alt="Image plants"
              width={60}
              className="object-cover w-full h-full"
              height={60}
            />
          </figure>
          <div className="">
            <h4 className="font-nunito-bold">{plantName}</h4>
            <p className="text-sm font-nunito italic text-slate-500">
              {FamilyName}
            </p>
          </div>
        </article>
        <div className="w-px h-[60px] bg-slate-500"></div>
        <article className="flex gap-10 items-center">
          <section>
            <h4 className="text-sm font-nunito text-slate-500">
              Plant Category
            </h4>
            <p className="font-nunito-bold ">
              {dataPlantNew?.plant_category.name}
            </p>
          </section>
          <section>
            <h4 className="text-sm font-nunito text-slate-500">Toxicity</h4>
            <p className="font-nunito-bold ">
              {dataPlantNew.is_toxic ? "Toxic Plant" : " Non-Toxic Plant"}
            </p>
          </section>
          <section>
            <h4 className="text-sm font-nunito text-slate-500">
              Harvest Duration
            </h4>
            <p className="font-nunito-bold ">{dataPlantNew.harvest_duration}</p>
          </section>
          <section>
            <h4 className="text-sm font-nunito text-slate-500">
              Climate Condition
            </h4>
            <p className="font-nunito-bold ">
              {dataPlantNew.climate_condition}
            </p>
          </section>
        </article>
      </section>
    </section>
  );
}
