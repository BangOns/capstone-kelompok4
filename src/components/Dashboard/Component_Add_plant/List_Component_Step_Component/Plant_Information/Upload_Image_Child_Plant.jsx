import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FuncDeleteImagePlantInformation,
  FuncPlantInformationInputImage,
} from "../../../../../libs/redux/Slice/AddPlantSlice";
import { FuncMessagePlantError } from "../../../../../libs/redux/Slice/DashboardSlice";

export default function Upload_Image_Child_Plant({ ids }) {
  const { PlantInformationInput } = useSelector((state) => state.addplant);
  const [imageChild, imageChildSet] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (PlantInformationInput.plant_images.length !== 0) {
      const dataFilter = PlantInformationInput.plant_images
        .filter((items) => items.is_primary !== 1)
        .find(
          (items) =>
            items.file_name ===
            PlantInformationInput.plant_images[ids]?.file_name
        );
      if (dataFilter) {
        imageChildSet(dataFilter.file_name);
      } else {
        imageChildSet("");
      }
    }
  }, [PlantInformationInput]);
  function handleChangeFileThumbnails(e) {
    e.preventDefault();
    const { files } = e.target;
    const fileSizeMB = files[0].size / (1024 * 1024);
    if (fileSizeMB > 2) {
      dispatch(FuncMessagePlantError(true));
    } else {
      const imgUrl = URL.createObjectURL(files[0]);
      dispatch(
        FuncPlantInformationInputImage({
          imagePrev: imageChild ? imageChild : "",
          value: {
            file_name: imgUrl,
            is_primary: 0,
          },
        })
      );
      imageChildSet(imgUrl);
    }
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
                  FuncDeleteImagePlantInformation({ filename: imageChild })
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
          onClick={() =>
            document
              .getElementById(
                `image-${PlantInformationInput.plant_images.length}`
              )
              .click()
          }
        >
          <Image
            src={IconsImport.IconsImageUploadChildren}
            alt="uploadImage"
            width={16}
            height={16}
          />
          <input
            type="file"
            id={`image-${PlantInformationInput.plant_images.length}`}
            accept="image/*"
            className="hidden"
            onChange={handleChangeFileThumbnails}
          />
        </div>
      )}
    </div>
  );
}
