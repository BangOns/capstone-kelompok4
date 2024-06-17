import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { FuncPlantInformationInput } from "../../../../../libs/redux/Slice/AddPlantSlice";
import { FuncPlantInformationInputEdit } from "../../../../../libs/redux/Slice/EditPlantSlice";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Plant_Descriptions({ value, setValue }) {
  const { PlantInformationInputEdit, dataPlantEdit } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();

  return (
    <section className="basis-1/2 h-full">
      <header className="pb-2">
        <h1 className="font-nunito-bold text-sm">
          Plant Description<span className="text-red-500">*</span>
        </h1>
      </header>
      <article className="w-full border border-neutral-300  rounded-lg ">
        <ReactQuill
          className="w-full h-[180px]  flex-col-reverse flex  font-nunito z-10 "
          theme="snow"
          // value={PlantInformationInputEdit.description || ""}
          // erroor di description
          placeholder="Description..."
          onChange={(e) =>
            dispatch(
              FuncPlantInformationInputEdit({
                name: "description",
                value: e,
              })
            )
          }
        />
      </article>
    </section>
  );
}