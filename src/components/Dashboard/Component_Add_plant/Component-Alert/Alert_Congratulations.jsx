"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IconsImport } from "../../../../utils/IconsImport";
import { ImageImport } from "../../../../utils/ImageImport";
import { useDispatch, useSelector } from "react-redux";
import { FinishAddPlant } from "../../../../libs/redux/Slice/DashboardSlice";
import { useRouter } from "next/navigation";

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};
export default function Alert_Congratulations() {
  const dispatch = useDispatch();
  const { finishAddPlant } = useSelector((state) => state.dashboard);
  const route = useRouter();
  return (
    <AnimatePresence>
      {finishAddPlant && (
        <div className="fixed top-0 z-10 left-0 w-screen h-screen grid place-items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            exit="hidden"
            className="p-4 w-[303px] rounded-2xl bg-white border border-gray-950"
          >
            <figure className="w-full flex justify-center">
              <Image src={ImageImport.ImageCongrats} alt="human" />
            </figure>
            <div className="mt-8">
              <p className="text-center text-2xl font-nunito-bold">
                Are you sure you want to cancel adding plant data?
              </p>
              <p className="font-nunito text-center">
                All of the information will be erased and cannot be restored
              </p>
            </div>
            <div className="mt-8 font-nunito-bold flex w-full gap-2 justify-between">
              <button
                onClick={() => {
                  dispatch(FinishAddPlant(false));
                  route.push("/dashboard/manage-plant");
                }}
                className=" text-white  w-full p-[14px] rounded-md bg-emerald-500"
              >
                View Added Plants
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
