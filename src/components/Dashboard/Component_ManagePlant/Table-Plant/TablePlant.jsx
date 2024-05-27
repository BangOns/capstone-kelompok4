import React from "react";
import PlantInformation from "./PlantInformation";
import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";

export default function TablePlant() {
  return (
    <table className="table border">
      {/* head */}
      <thead className="bg-base-200 ">
        <tr className="font-nunito-bold text-black text-base text-center">
          <th>Image</th>
          <th className="flex gap-1 justify-center">
            Plant Name
            <Image
              src={IconsImport.IconsDropdown}
              alt="dropdown"
              className="cursor-pointer"
            />
          </th>
          <th>
            <div className="flex gap-1 justify-center">
              Added Date
              <Image
                src={IconsImport.IconsDropdown}
                alt="dropdown"
                className="cursor-pointer"
              />
            </div>
          </th>

          <th className="">
            <div className="flex justify-center items-center gap-1">
              Category
              <Image
                src={IconsImport.IconsDropdown}
                alt="dropdown"
                className="cursor-pointer"
              />
            </div>
          </th>
          <th>Wathering Schedule</th>
          <th>Harvest Duration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <PlantInformation />
        <PlantInformation />
      </tbody>
    </table>
  );
}
