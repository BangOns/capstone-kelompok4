import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { FuncPlantInformationInput } from "../../../../../libs/redux/Slice/AddPlantSlice";
import { FuncPlantInformationInputEdit } from "../../../../../libs/redux/Slice/EditPlantSlice";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Plant_Descriptions() {
  const { dataPlantNewEdit, dataPlantEditFullField } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataPlantEditFullField.data && dataPlantNewEdit) {
      dispatch(
        FuncPlantInformationInputEdit({
          name: "description",
          value: dataPlantNewEdit.description
            ? dataPlantNewEdit.description
            : dataPlantEditFullField.data.description,
        })
      );
    }
  }, [dataPlantEditFullField, dataPlantNewEdit]);
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
          value={dataPlantNewEdit?.description && dataPlantNewEdit?.description}
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
