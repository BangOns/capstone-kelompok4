"use client";
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SearchManagePlant({ searchValue, searchValueSet }) {
  return (
    <header className="">
      <h1 className="text-[28px] font-nunito-bold pb-6 text-black">Manage Plant</h1>
      <div className="flex justify-between">
        <div className="w-[286px] border rounded-lg flex items-center px-[14px] py-3 gap-2">
          <Image src={IconsImport.IconsSearch} alt="search" />
          <input
            type="text"
            placeholder="Search Plants..."
            className="w-full border-0 focus:ring-0 outline-none text-sm font-poppins bg-white"
            value={searchValue}
            onChange={(e) => searchValueSet(e.target.value)}
          />
        </div>
        <Link
          href={"/dashboard/manage-plant/add-plant"}
          className="rounded-[14px] bg-emerald-500 text-white font-nunito-bold p-[14px] flex items-center gap-4 hover:bg-emerald-700 transition"
        >
          <Image src={IconsImport.IconsAddPlant} alt="add plant" />
          <p>Add New Plant</p>
        </Link>
      </div>
    </header>
  );
}
