import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React from "react";

export default function Upload_Image_Plant({
  imageThumbnail,
  imageThumbnailSet,
  handleChangeFileThumbnails,
}) {
  return (
    <section className="flex w-full  h-full">
      {imageThumbnail ? (
        <div className="w-full h-full relative">
          <Image
            src={imageThumbnail}
            alt="thumbnails"
            className="w-full h-full"
            width={180}
            height={180}
          />
          <div className="absolute top-0 left-0 group w-full h-full hover:cursor-pointer grid place-items-center transition">
            <Image
              src={IconsImport.IconsDeletePlants}
              alt="delete"
              className="hidden group-hover:block hover:bg-slate-400/50 hover:p-2 hover:rounded-full transition-all"
              onClick={() => imageThumbnailSet("")}
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
