"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";
import TablePlantInformation from "./PlantInformation";
import { useDispatch, useSelector } from "react-redux";
import Loading_Table from "../../../../utils/Component-Loading/Loading_Table";
import { FetchDataTable } from "../../../../utils/Function-FetchAPI/GetDataAllTable";

export default function TablePlant({
  dataAllPlantsWithAPI,
  dataAllPlantsWithAPISet,
}) {
  function HandleSortDataTable(nameSort) {
    if (nameSort === "plantName") {
      const sortPlantName = [...dataAllPlantsWithAPI].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      dataAllPlantsWithAPISet(sortPlantName);
    } else if (nameSort === "addedDate") {
      // menguurutkan data dari tanggal yang paling terbaru
      const sortedPlantDate = [...dataAllPlantsWithAPI].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      dataAllPlantsWithAPISet(sortedPlantDate);
    } else if (nameSort === "category") {
      // mengurutkan data dari alfavbet seperti plant name
      const sortCategoryName = [...dataAllPlantsWithAPI].sort((a, b) =>
        a.plant_category.name.localeCompare(b.plant_category.name)
      );
      dataAllPlantsWithAPISet(sortCategoryName);
    }
  }

  return (
    <table className="table border ">
      {/* head */}
      <thead className="bg-base-200 ">
        <tr className="font-nunito-bold text-black text-base text-center">
          <th>Image</th>
          <th className="flex gap-1 justify-center">
            Plant Name
            <Image
              src={IconsImport.IconsDropdown}
              alt="dropdown"
              disabled={!dataAllPlantsWithAPI?.length ? true : false}
              className="cursor-pointer"
              onClick={() => HandleSortDataTable("plantName")}
            />
          </th>
          <th>
            <div className="flex gap-1 justify-center">
              Added Date
              <Image
                src={IconsImport.IconsDropdown}
                alt="dropdown"
                disabled={!dataAllPlantsWithAPI?.length ? true : false}
                className="cursor-pointer"
                onClick={() => HandleSortDataTable("addedDate")}
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
                onClick={() => HandleSortDataTable("category")}
              />
            </div>
          </th>
          <th>Wathering Schedule</th>
          <th>Harvest Duration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dataAllPlantsWithAPI?.length !== 0 ? (
          dataAllPlantsWithAPI?.map((items, index) => (
            <TablePlantInformation key={index} dataPlant={items} />
          ))
        ) : (
          <>
            <Loading_Table />
            <Loading_Table />
            <Loading_Table />
            <Loading_Table />
            <Loading_Table />
          </>
        )}
      </tbody>
    </table>
  );
}
