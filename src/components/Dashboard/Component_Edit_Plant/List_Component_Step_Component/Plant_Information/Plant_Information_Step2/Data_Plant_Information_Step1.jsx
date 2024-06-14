import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImageImport } from "../../../../../../utils/ImageImport";
import { useSelector } from "react-redux";

export default function Data_Plant_Information_Step1() {
  const [imageThumb, imageThumbSet] = useState("");
  const { PlantInformationInput } = useSelector((state) => state.addplant);
  const plantName = PlantInformationInput.name.split("-")[0];
  const FamilyName = PlantInformationInput.name.split("-")[1];
  const GetImageThumbnails =
    PlantInformationInput.plant_images.length !== 0
      ? PlantInformationInput.plant_images.filter(
          (items) => items.is_primary === 1
        )
      : [];

  useEffect(() => {
    if (GetImageThumbnails.length !== 0) {
      imageThumbSet(GetImageThumbnails[0].file_name);
    }
  }, [GetImageThumbnails, PlantInformationInput]);
  return (
    <section className="w-full p-4 border-slate-200 border rounded-[10px] flex gap-6">
      <article className="flex  gap-4 items-center">
        <figure className="w-[60px] h-[60px] rounded-xl border flex items-end justify-center bg-gray-200 overflow-hidden bg-gradient-to-b from-50% from-white to-gray-200/60">
          <Image
            src={imageThumb ? imageThumb : ImageImport.ImagePlants}
            width={60}
            className="object-cover w-full h-full"
            height={60}
            alt="Image plants"
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
          <h4 className="text-sm font-nunito text-slate-500">Plant Category</h4>
          <p className="font-nunito-bold ">
            {" "}
            {PlantInformationInput?.plant_category.name}
          </p>
        </section>
        <section>
          <h4 className="text-sm font-nunito text-slate-500">Toxicity</h4>
          <p className="font-nunito-bold ">
            {PlantInformationInput.is_toxic
              ? "Toxic Plant"
              : " Non-Toxic Plant"}
          </p>
        </section>
        <section>
          <h4 className="text-sm font-nunito text-slate-500">
            Harvest Duration
          </h4>
          <p className="font-nunito-bold ">
            {PlantInformationInput.harvest_duration}
          </p>
        </section>
        <section>
          <h4 className="text-sm font-nunito text-slate-500">
            Climate Condition
          </h4>
          <p className="font-nunito-bold ">
            {" "}
            {PlantInformationInput.climate_condition}
          </p>
        </section>
      </article>
    </section>
  );
}
