"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
// import { FuncFaQInput } from "../../../../../libs/redux/Slice/AddPlantSlice";
import { FuncFaQInputEdit } from "../../../../../libs/redux/Slice/EditPlantSlice";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Answer({ name, redux, value, id, onUpdate }) {
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   onChange(e); // Memanggil fungsi onChange dari props untuk memperbarui state di komponen induk
  //   dispatch(FuncFaQInput({ name: redux, value: e })); // Memperbarui Redux store

  //   onUpdate(id, { [redux]: e });
  // };

  return (
    <div className="w-full basis-1/2">
      <div className="text-[#030712] font-nunito-bold mb-2 text-[14px]">
        {name}
      </div>
      <div className="w-full basis-1/2">
        <ReactQuill
          className="w-full h-[148px] text-neutral-950 border border-neutral-400 text-[14px] flex-col-reverse flex rounded-md"
          value={value}
          onChange={(e) => onUpdate(id, redux, e)}
          placeholder={`${name}...`}
        />
      </div>
    </div>
  );
}