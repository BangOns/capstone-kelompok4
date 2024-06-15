"use client";
import { IconsImport } from "@/utils/IconsImport";
import { ImageImport } from "@/utils/ImageImport";
import React, { useEffect, useState } from "react";
import MenuOption from "./MenuOption";
import { FormatDate } from "../../../../utils/FormatDate";
import Image from "next/image";

export default function TablePlantInformation({ dataPlant }) {
  const [activeMenu, activeMenuSet] = useState(false);
  const [imageThumb, imageThumbSet] = useState("");

  const plantName = dataPlant.name.split("-")[0];
  const familyName = dataPlant.name.split("-")[1];
  const FormatDates = FormatDate(dataPlant.created_at);
  const GetImageThumbnails = dataPlant.plant_images
    ? dataPlant.plant_images.length !== 0
      ? dataPlant.plant_images.filter((items) => items.is_primary === 1)
      : []
    : [];
  useEffect(() => {
    if (GetImageThumbnails.length !== 0) {
      imageThumbSet(GetImageThumbnails[0].file_name);
    }
  }, [GetImageThumbnails, dataPlant]);
  return (
    <tr className="text-center">
      <td className="flex justify-center">
        <figure className="w-[60px] h-[60px] rounded-xl border flex items-end justify-center bg-gray-200 overflow-hidden bg-gradient-to-b from-50% from-white to-gray-200/60">
          <Image
            src={
              imageThumb
                ? GetImageThumbnails[0]?.file_name
                : ImageImport.ImagePlants
            }
            alt="image plants"
            width={60}
            height={60}
          />
        </figure>
      </td>
      <td>
        <div className="text-center">
          <h4 className="text-base font-nunito-bold">{plantName}</h4>
          <p className="text-sm font-nunito italic">{familyName}</p>
        </div>
      </td>
      <td>{FormatDates}</td>
      <td>{dataPlant.plant_category?.name}</td>
      <td>
        <p>
          {dataPlant.watering_schedule?.watering_frequency}x per{" "}
          {dataPlant.watering_schedule?.each}
        </p>
        <p> {dataPlant.watering_schedule?.watering_time} AM</p>
      </td>
      <td>
        <p>{dataPlant.harvest_duration}</p>
      </td>
      <td className="relative">
        <Image
          src={IconsImport.IconsMenuTable}
          alt="menu"
          onClick={() => activeMenuSet(!activeMenu)}
          className="hover:cursor-pointer"
        />
        <MenuOption active={activeMenu} id={dataPlant.id} />
      </td>
    </tr>
  );
}
