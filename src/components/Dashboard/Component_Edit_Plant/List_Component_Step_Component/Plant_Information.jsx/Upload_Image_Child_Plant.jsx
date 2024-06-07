import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React from "react";

export default function Upload_Image_Child_Plant({
  imageChild,
  name,
  handleChangeImageChild,
}) {
  return (
    <div className="w-[50px] h-[50px] border-2 overflow-hidden border-dashed border-gray-300 rounded-lg cursor-pointer ">
      {imageChild[name] ? (
        <div className="w-full h-full relative ">
          <Image
            src={imageChild[name]}
            alt="thumbnails"
            className="w-full h-full"
            width={50}
            height={50}
          />
        </div>
      ) : (
        <div
          className="w-full h-full grid place-items-center"
          onClick={() => document.getElementById(name).click()}
        >
          <Image src={IconsImport.IconsImageUploadChildren} alt="uploadImage" />
          <input
            type="file"
            name={name}
            id={name}
            accept="image/*"
            className="hidden"
            onChange={handleChangeImageChild}
          />
        </div>
      )}
    </div>
  );
}
