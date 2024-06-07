"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { FuncFaQInput } from "../../../../../libs/redux/Slice/AddPlantSlice";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Answer({ name }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { FaQInput } = useSelector((state) => state.addplant);
  return (
    <div className="w-full basis-1/2 ">
      <div className="text-[#030712] font-nunito-bold mb-2 text-[14px]">
        {name}
      </div>
      <div className="w-full basis-1/2">
        <ReactQuill
          className="w-full h-[148px] text-neutral-950 border border-neutral-400 text-[14px] flex-col-reverse flex rounded-md"
          value={value}
          onChange={(e) => {
            setValue(e);
            dispatch(FuncFaQInput({ name: "asked", value: e }));
          }}
          placeholder={`${name}...`}
        />
      </div>
    </div>
  );
}
