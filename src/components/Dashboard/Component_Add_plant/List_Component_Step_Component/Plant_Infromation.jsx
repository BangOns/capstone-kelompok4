"use client";

import React, { useState } from "react";
import Upload_Image_Plant from "./Plant_Information.jsx/Upload_Image_Plant";
import Upload_Image_Child_Plant from "./Plant_Information.jsx/Upload_Image_Child_Plant";
import Plant_Descriptions from "./Plant_Information.jsx/Plant_Descriptions";
import Plant_Input from "./Plant_Information.jsx/Plant_Input";
import Plant_Input_RadioButton from "./Plant_Information.jsx/Plant_Input_RadioButton";
export default function Plant_Infromation() {
  const [value, setValue] = useState("");
  const [imageThumbnail, imageThumbnailSet] = useState("");
  const [imageChild, imageChildSet] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
    image8: "",
  });
  function handleChangeFileThumbnails(e) {
    e.preventDefault();
    const { files } = e.target;
    imageThumbnailSet(URL.createObjectURL(files[0]));
  }
  function handleChangeImageChild(e) {
    const { name, files } = e.target;
    imageChildSet((prev) => ({
      ...prev,
      [name]: URL.createObjectURL(files[0]),
    }));
  }
  return (
    <form className="w-full ">
      <article className="w-full flex justify-between ">
        <section className="basis-1/2 h-full">
          <header className="pb-2">
            <h1 className="font-nunito-bold text-sm ">Upload Plant Image</h1>
          </header>
          <article className="w-11/12 flex gap-4 h-[180px]">
            <Upload_Image_Plant
              imageThumbnail={imageThumbnail}
              imageThumbnailSet={imageThumbnailSet}
              handleChangeFileThumbnails={handleChangeFileThumbnails}
            />
            <section className="w-5/6">
              <div className="w-full flex items-start justify-between">
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image1"
                  handleChangeImageChild={handleChangeImageChild}
                />
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image2"
                  handleChangeImageChild={handleChangeImageChild}
                />
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image3"
                  handleChangeImageChild={handleChangeImageChild}
                />
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image4"
                  handleChangeImageChild={handleChangeImageChild}
                />
              </div>
              <div className="w-full flex items-start justify-between pt-2">
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image5"
                  handleChangeImageChild={handleChangeImageChild}
                />
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image6"
                  handleChangeImageChild={handleChangeImageChild}
                />
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image7"
                  handleChangeImageChild={handleChangeImageChild}
                />
                <Upload_Image_Child_Plant
                  imageChild={imageChild}
                  name="image8"
                  handleChangeImageChild={handleChangeImageChild}
                />
              </div>
              <div className="pt-3 w-full">
                <p className="text-sm font-poppins text-gray-300 ">
                  You can add up to 10 images (max. 2 MB per images)
                </p>
              </div>
            </section>
          </article>
        </section>
        <Plant_Descriptions value={value} setValue={setValue} />
      </article>
      <Plant_Input />
      <Plant_Input_RadioButton />
      <article className="w-full pt-[15px]">
        <h4 className="text-xs font-nunito">
          <span className="text-red-500 ">*</span> = must be filled
        </h4>
      </article>
    </form>
  );
}
