import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImageImport } from "../../../../utils/ImageImport";
import { IconsImport } from "../../../../utils/IconsImport";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const variantsDesc = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Component_Steps({ dataPlantsStep }) {
  const [activeDesc, activeDescSet] = useState(false);
  return (
    <section className="w-full border border-neutral-300 rounded-md p-4 mb-4">
      <header className="w-full flex justify-between items-center">
        <figure className="flex gap-4 items-center">
          <motion.div
            className=""
            variants={variants}
            animate={activeDesc ? "hidden" : "visible"}
          >
            <Image
              src={
                dataPlantsStep.step_image_url
                  ? dataPlantsStep.step_image_url
                  : ImageImport.ImagePlants
              }
              width={60}
              height={60}
              className="w-[60px] h-[60px] rounded object-cover"
              alt="image-plants"
            />
          </motion.div>
          <figcaption>
            <h2 className="text-sm font-nunito-bold">
              Step {dataPlantsStep.step_number}
            </h2>
            <motion.p
              variants={variants}
              animate={activeDesc ? "hidden" : "visible"}
              className="text-sm font-nunito"
            >
              {dataPlantsStep.step_title}
            </motion.p>
          </figcaption>
        </figure>
        <div className="flex items-center ">
          <Image
            src={IconsImport.IconsDropdown}
            alt="dropdown"
            className="m-4 cursor-pointer"
            onClick={() => {
              activeDescSet(!activeDesc);
            }}
          />
        </div>
      </header>
      <motion.article
        variants={variantsDesc}
        animate={activeDesc ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className={`w-full mt-6 ${activeDesc ? "block" : "hidden"}`}
      >
        <figure className="w-full flex gap-4">
          <Image
            src={
              dataPlantsStep.step_image_url
                ? dataPlantsStep.step_image_url
                : ImageImport.ImagePlants
            }
            alt="image-test"
            className="w-[237px] h-[231px] object-cover rounded"
            width={237}
            height={231}
          />
          <figcaption className="w-full">
            <div className="">
              <h4 className="text-sm font-nunito-bold pb-1">Title</h4>
              <div className="w-full border border-neutral-300 rounded-lg py-[14px] px-3">
                <p className="font-nunito-bold text-sm">
                  {dataPlantsStep.step_title}
                </p>
              </div>
              <div className="w-full mt-2 border border-neutral-300 rounded-lg py-[14px] px-3">
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{
                    __html: dataPlantsStep.step_description,
                  }}
                />
              </div>
            </div>
          </figcaption>
        </figure>
      </motion.article>
    </section>
  );
}
