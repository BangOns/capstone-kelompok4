import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  FuncDeleteImagePlantInformationEdit,
  FuncPlantInformationInputImageEdit,
} from "../../../../../libs/redux/Slice/EditPlantSlice";

export default function Upload_Image_Plant() {
  const { dataPlantEditFullField, dataPlantNewEdit } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();

  const [imageThumb, imageThumbSet] = useState("");
  const GetImageThumbnails = dataPlantNewEdit.plant_images
    ? dataPlantNewEdit.plant_images?.filter((items) => items.is_primary === 1)
    : [];
  function handleChangeFileThumbnails(e) {
    const { files } = e.target;
    const imgUrl = URL.createObjectURL(files[0]);

    dispatch(
      FuncPlantInformationInputImageEdit({
        imagePrev: imageThumb ? imageThumb : "",
        value: {
          file_name: imgUrl,
          is_primary: 1,
        },
      })
    );

    imageThumbSet(URL.createObjectURL(files[0]));
  }

  useEffect(() => {
    if (GetImageThumbnails.length !== 0) {
      imageThumbSet(GetImageThumbnails[0].file_name);
    } else {
      imageThumbSet("");
    }
  }, [GetImageThumbnails]);
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
  return (
    <section className="flex w-full  h-full">
      {GetImageThumbnails.length !== 0 ? (
        <div className="w-full h-full relative">
          <Image
            src={imageThumb}
            alt="thumbnails"
            className="w-full h-full"
            width={180}
            height={180}
          />
          <div className="absolute top-0 left-0 group w-full h-full  grid place-items-center transition">
            <input
              type="file"
              name=""
              accept="image/*"
              id="imageEdit"
              className="hidden"
              onChange={handleChangeFileThumbnails}
            />
            <Image
              src={IconsImport.IconsEditImage}
              alt="delete"
              className="absolute top-0 right-0 rounded-lg p-[14px]  bg-emerald-500 hover:bg-slate-400/50  cursor-pointer hover:rounded-full transition-all"
              onClick={() => document.getElementById("imageEdit").click()}
              width={50}
              height={50}
            />
            <Image
              src={IconsImport.IconsDeletePlants}
              alt="delete"
              className="hidden group-hover:block cursor-pointer   hover:bg-slate-400/50 hover:p-2 hover:rounded-full transition-all"
              onClick={() => {
                dispatch(
                  FuncDeleteImagePlantInformationEdit({
                    is_primary: 1,
                    filename: imageThumb,
                  })
                );

                imageThumbSet("");
              }}
              width={40}
              height={40}
            />
          </div>
        </div>
      ) : (
        <>
          <input
            type="file"
            name=""
            accept="image/*"
            id="thumbnails"
            className="hidden"
            onChange={handleChangeFileThumbnails}
          />
          <div
            className="p-4 rounded-2xl border-2 border-dashed flex justify-center items-center border-gray-300 w-full h-full cursor-pointer"
            onClick={() => document.getElementById("thumbnails").click()}
          >
            <figure className="w-full flex flex-col items-center justify-center">
              <Image src={IconsImport.IconsImageUpload} alt="uploadImage" />
              <figcaption className="text-sm text-center font-nunito text-gray-500">
                <p>
                  Upload Thumbnail Image <span className="text-red-500">*</span>
                </p>
                <p>(max. 2 MB)</p>
              </figcaption>
            </figure>
          </div>
        </>
      )}
    </section>
  );
}
