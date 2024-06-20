"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IconsImport } from "../../../../../../utils/IconsImport";
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};
export default function Asked_And_Answer({ dataPlants }) {
  const [activeQuest, activeQuestSet] = useState(false);
  function stripHtmlTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  }
  return (
    <section className="w-full rounded-md border border-gray-200 p-4 my-4">
      <header className="flex justify-between items-center">
        <article className="w-full py-[5px]">
          {activeQuest ? (
            <h2 className="font-nunito-bold text-sm">
              Frequently Asked Questions
            </h2>
          ) : (
            <>
              <p className="font-nunito-bold text-sm pb-2">
                Q : {stripHtmlTags(dataPlants.question)}
              </p>
              <p className=" text-sm font-nunito">
                A : {stripHtmlTags(dataPlants.answer)}
              </p>
            </>
          )}
        </article>
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
              activeQuestSet(!activeQuest);
            }}
          />
        </div>
      </header>
      <motion.article
        variants={variants}
        animate={activeQuest ? "visible" : "hidden"}
        className={`w-full ${
          activeQuest ? "flex" : "hidden"
        } justify-between gap-4 mt-4`}
      >
        <section className="basis-1/2 w-full  ">
          <h2 className="font-nunito-bold text-sm">Question</h2>
          <div
            className="border border-gray-200 rounded-md
mt-2 p-3"
          >
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: dataPlants.question }}
            />
          </div>
        </section>
        <section className="basis-1/2 w-full ">
          <h2 className="font-nunito-bold text-sm">Answer</h2>
          <div
            className="border border-gray-200 rounded-md
mt-2 p-3"
          >
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: dataPlants.answer }}
            />
          </div>
        </section>
      </motion.article>
    </section>
  );
}
