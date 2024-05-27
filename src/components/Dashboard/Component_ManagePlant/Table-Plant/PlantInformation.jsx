"use client";
import { IconsImport } from "@/utils/IconsImport";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import React, { useState } from "react";
import MenuOption from "./MenuOption";

export default function PlantInformation() {
  const [activeMenu, activeMenuSet] = useState(false);
  return (
    <tr className="text-center">
      <td className="flex justify-center">
        <figure className="w-[60px] h-[60px] rounded-xl border flex items-end justify-center bg-gray-200 overflow-hidden bg-gradient-to-b from-50% from-white to-gray-200/60">
          <Image src={ImageImport.ImagePlants} alt="image plants" />
        </figure>
      </td>
      <td>
        <div className="text-center">
          <h4 className="text-base font-nunito-bold">Aloea Vera</h4>
          <p className="text-sm font-nunito italic">Asphodelaceae</p>
        </div>
      </td>
      <td>21 May 2024</td>
      <td>Succulents</td>
      <td>
        <p>1x per day</p>
        <p>08:00 AM</p>
      </td>
      <td>
        <p>3 Month</p>
      </td>
      <td className="relative">
        <Image
          src={IconsImport.IconsMenuTable}
          alt="menu"
          onClick={() => activeMenuSet(!activeMenu)}
          className="hover:cursor-pointer"
        />
        <MenuOption active={activeMenu} />
      </td>
    </tr>
  );
}
