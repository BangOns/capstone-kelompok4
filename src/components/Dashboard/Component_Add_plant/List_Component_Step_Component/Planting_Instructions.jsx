"use client";
import IconsAddPlant from "@/utils/Component-Icons-Add-plant/IconsAddPlant";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Planting_Instructions() {
  const [value, setValue] = useState("");
  return (
    <div className="rounded-lg border-2 mt-10">
      <div className="flex  m-[16px] mx-10 ">
        <div className="w-full  ">
          <div className="flex text-green-500">
            <div className="mr-[16px]">
              <IconsAddPlant />
            </div>
            <p className="text-[16px]"> Add Steps</p>
          </div>
        </div>
        <p className="w-full text-[#6B7280] text-right text-[12px] m-auto">
          If you finish editing, it will
          <span className="text-green-500"> autosave </span> when you minimize
          the box
        </p>
      </div>
      <div className=" border-2 rounded-lg mx-10 mb-10">
        <div>
          <p className="mx-10 my-5 font-bold">Step 1</p>
        </div>
        <div className="flex">
          <Image src={ImageImport.ImageTest} alt="profile" />
          <ReactQuill
            className="flex-col-reverse flex m-5 border-2 rounded-lg  w-full"
            theme="snow"
            value={value}
            onChange={setValue}
          ></ReactQuill>
        </div>
      </div>
    </div>
  );
}
