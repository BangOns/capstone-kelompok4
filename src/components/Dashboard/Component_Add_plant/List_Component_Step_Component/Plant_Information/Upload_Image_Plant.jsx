import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantInformationInput } from "../../../../../libs/redux/Slice/AddPlantSlice";

export default function Upload_Image_Plant({}) {
  const { PlantInformationInput } = useSelector((state) => state.addplant);
  const [imageThumb, imageThumbSet] = useState("");
  const dispatch = useDispatch();
  const GetImageThumbnails =
    PlantInformationInput.plant_images.length !== 0 ? [] : [];
  function handleChangeFileThumbnails(e) {
    e.preventDefault();
    const { files } = e.target;
    const formData = new FormData();
    formData.append("file", files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch(
        FuncPlantInformationInput({
          name: "plant_images",
          value: {
            id: 14,
            plant_id: 2,
            file_name: reader.result,
            is_primary: 1,
          },
        })
      );
    };
    reader.readAsDataURL(files[0]);

    imageThumbSet(URL.createObjectURL(files[0]));
  }
  // useEffect(() => {
  //   if (PlantInformationInput.ImageThumbnails) {
  //     imageThumbSet(PlantInformationInput.ImageThumbnails);
  //   }
  // }, [PlantInformationInput]);
  return (
    <section className="flex w-full  h-full">
      {GetImageThumbnails.length !== 0 ? (
        <div className="w-full h-full relative">
          <Image
            src={GetImageThumbnails.file_name}
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
                  FuncPlantInformationInput({
                    name: "ImageThumbnails",
                    value: "",
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
