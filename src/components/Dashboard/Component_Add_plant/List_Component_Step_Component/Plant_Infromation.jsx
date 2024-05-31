"use client";

import React, { Fragment, useState } from "react";
import Upload_Image_Plant from "./Plant_Information.jsx/Upload_Image_Plant";
import Upload_Image_Child_Plant from "./Plant_Information.jsx/Upload_Image_Child_Plant";
import Plant_Descriptions from "./Plant_Information.jsx/Plant_Descriptions";
import Plant_Input from "./Plant_Information.jsx/Plant_Input";
import Plant_Input_RadioButton from "./Plant_Information.jsx/Plant_Input_RadioButton";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import Plant_Information_Step2 from "./Plant_Information.jsx/Plant_Information_Step2";
import { useDispatch, useSelector } from "react-redux";
import { PlantInformationStep2 } from "@/libs/redux/Slice/DashboardSlice";
export default function Plant_Infromation() {
  const { plantInformationStep2 } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
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

  function handleClickNext() {
    dispatch(PlantInformationStep2(true));
  }

  return (
    <Fragment>
      {!plantInformationStep2 ? (
        <div className="mt-6 p-4 border rounded-[10px]">
          <form className="w-full ">
            <article className="w-full flex justify-between ">
              <section className="basis-1/2 h-full">
                <header className="pb-2">
                  <h1 className="font-nunito-bold text-sm ">
                    Upload Plant Image
                  </h1>
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
          <div className="flex justify-between mt-10">
            <CancelButtonPlant />
            <div className=" flex">
              <PreviousButtonPlant disableOn={true} />
              <NextButtonPlant
                disabledOn={false}
                handleClick={handleClickNext}
              />
            </div>
          </div>
        </div>
      ) : (
        <Plant_Information_Step2 />
      )}
    </Fragment>
  );
}
