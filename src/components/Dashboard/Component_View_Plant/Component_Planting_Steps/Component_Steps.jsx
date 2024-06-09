"use client"

import Image from "next/image";
import React, { useState } from "react";
import { ImageImport } from "../../../../utils/ImageImport";
import { motion } from "framer-motion";
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

export default function Component_Steps() {
  const [activeDesc, activeDescSet] = useState(false);
  return (
    <section className="w-full border border-gray-500 rounded-md p-4 mb-4">
      <header className="w-full flex justify-between items-center">
        <figure className="flex gap-4 items-center">
          <motion.div
            className=""
            variants={variants}
            animate={activeDesc ? "hidden" : "visible"}
          >
            <Image src={ImageImport.ImagePlants} alt="image-plants" />
          </motion.div>
          <figcaption>
            <h2 className="text-sm font-nunito-bold">Step 1</h2>
            <motion.p
              variants={variants}
              animate={activeDesc ? "hidden" : "visible"}
              className="text-sm font-nunito"
            >
              Choose Your Seeds or Seedlings
            </motion.p>
          </figcaption>
        </figure>
        <div className="flex items-center ">
          <Image
            src={IconsImport.IconsDeletePlant}
            alt="delete"
            className="m-4 cursor-pointer"
          />
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
            src={ImageImport.ImageTest}
            alt="image-test"
            className="w-[237px] h-[231px]"
            width={237}
            height={231}
          />
          <figcaption className="w-full">
            <div className="">
              <h4 className="text-sm font-nunito-bold pb-1">Title</h4>
              <div className="w-full border border-gray-950 rounded-lg py-[14px] px-3">
                <p className="font-nunito-bold text-sm">
                  Choose Your Seeds or Seedlings:{" "}
                </p>
              </div>
              <div className="w-full mt-2 border border-gray-950 rounded-lg py-[14px] px-3">
                <p className="text-sm font-nunito">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam cum amet pariatur corporis expedita culpa dolores
                  perspiciatis quam? Accusamus recusandae quod perferendis eius
                  saepe voluptatibus repellendus fugiat nulla ex expedita.
                </p>
                <ul className="font-nunito text-sm list-disc px-5">
                  <li className="">
                    Seeds: Start indoors 6-8 weeks before the last expected
                    frost date.
                  </li>
                  <li>
                    Seeds: Start indoors 6-8 weeks before the last expected
                    frost date.
                  </li>
                </ul>
              </div>
            </div>
          </figcaption>
        </figure>
      </motion.article>
    </section>
  );
}
