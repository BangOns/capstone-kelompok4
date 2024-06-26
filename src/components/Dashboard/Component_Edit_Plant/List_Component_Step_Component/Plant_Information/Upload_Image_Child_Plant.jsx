import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FuncDeleteImagePlantInformationEdit,
  FuncPlantInformationInputImageEdit,
} from "../../../../../libs/redux/Slice/EditPlantSlice";

export default function Upload_Image_Child_Plant({ ids }) {
  const { dataPlantEditFullField, dataPlantNewEdit } = useSelector(
    (state) => state.editplant
  );
  const [imageChild, imageChildSet] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataPlantEditFullField.data) {
      dispatch(
        FuncPlantInformationInputImageEdit({
          name: "plant_images",
          value: dataPlantNewEdit.plant_images
            ? dataPlantNewEdit.plant_images
            : dataPlantEditFullField.data.plant_images,
        })
      );
    }
  }, [dataPlantEditFullField]);
  useEffect(() => {
    if (dataPlantNewEdit.plant_images) {
      const dataFilter = dataPlantNewEdit.plant_images
        .filter((items) => items.is_primary !== 1)
        .find(
          (items) =>
            items.file_name === dataPlantNewEdit.plant_images[ids]?.file_name
        );
      if (dataFilter) {
        imageChildSet(dataFilter.file_name);
      } else {
        imageChildSet("");
      }
    }
  }, [dataPlantNewEdit]);

  function handleChangeFileThumbnails(e) {
    e.preventDefault();
    const { files } = e.target;
    const imgUrl = URL.createObjectURL(files[0]);
    dispatch(
      FuncPlantInformationInputImageEdit({
        imagePrev: imageChild ? imageChild : "",
        value: {
          file_name: imgUrl,
          is_primary: 0,
        },
      })
    );
    imageChildSet(imgUrl);
  }

  return (
    <div className="w-[50px] h-[50px] border-2 overflow-hidden border-dashed border-gray-300 rounded-lg cursor-pointer ">
      {imageChild ? (
        <div className="w-full h-full relative ">
          <Image
            src={imageChild}
            alt="image-child"
            className="w-full h-full"
            width={50}
            height={50}
          />
          <div className="absolute top-0 left-0 group w-full h-full  grid place-items-center transition">
            <input
              type="file"
              name=""
              accept="image/*"
              id={`imageEdit-${ids}`}
              className="hidden"
              onChange={handleChangeFileThumbnails}
            />
            <Image
              src={IconsImport.IconsEditImage}
              alt="delete"
              className="absolute top-0 right-0 rounded-lg p-[2px]  bg-emerald-500 hover:bg-slate-400/50  cursor-pointer hover:rounded-full transition-all"
              onClick={() =>
                document.getElementById(`imageEdit-${ids}`).click()
              }
              width={20}
              height={20}
            />
            <Image
              src={IconsImport.IconsDeletePlants}
              alt="delete"
              className="hidden group-hover:block cursor-pointer   hover:bg-slate-400/50 hover:p-2 hover:rounded-full transition-all"
              onClick={() => {
                dispatch(
                  FuncDeleteImagePlantInformationEdit({ filename: imageChild })
                );

                imageChildSet("");
              }}
              width={20}
              height={20}
            />
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full grid place-items-center"
          onClick={() => document.getElementById(`image-${ids}`).click()}
        >
          <Image src={IconsImport.IconsImageUploadChildren} alt="uploadImage" />
          <input
            type="file"
            id={`image-${ids}`}
            accept="image/*"
            className="hidden"
            onChange={handleChangeFileThumbnails}
          />
        </div>
      )}
    </div>
  );
}
