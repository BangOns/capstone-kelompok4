"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconsImport } from "../../../../utils/IconsImport";
import Image from "next/image";
import {
  FuncDeletePlant,
  FuncMessagePlantDelete,
} from "../../../../libs/redux/Slice/DashboardSlice";
import { useRouter } from "next/navigation";
import { FuncDataAllPlants } from "../../../../libs/redux/Slice/AddPlantSlice";

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};
export default function Alert_DeletePlant() {
  const dispatch = useDispatch();
  const { deletePlant, idToDeletePlant } = useSelector(
    (state) => state.dashboard
  );
  const { DataAllPlants } = useSelector((state) => state.addplant);
  const deletePlantsById =
    DataAllPlants && idToDeletePlant
      ? DataAllPlants.filter((items) => items.id !== idToDeletePlant)
      : [];
  const route = useRouter();
  return (
    <>
      <AnimatePresence>
        {deletePlant && (
          <div className="absolute top-0 z-10 left-0 w-screen h-screen grid place-items-center">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              exit="hidden"
              className="p-4 w-[303px] rounded-2xl bg-white border border-gray-950"
            >
              <figure className="w-full flex justify-center">
                <Image src={IconsImport.IconsHuman} alt="human" />
              </figure>
              <div className="mt-8">
                <p className="text-center text-2xl font-nunito-bold">
                  Are you sure you want to delete plant data?
                </p>
                <p className="font-nunito text-center">
                  All of the information will be erased and cannot be restored
                </p>
              </div>
              <div className="mt-8 font-nunito-bold flex w-full gap-2 justify-between">
                <button
                  onClick={() =>
                    dispatch(FuncDeletePlant({ popUp: false, id: 0 }))
                  }
                  className="basis-1/2 text-emerald-500 w-full p-[14px] rounded-md bg-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    dispatch(FuncMessagePlantDelete(true));
                    dispatch(FuncDeletePlant(false));
                    dispatch(FuncDataAllPlants({ value: deletePlantsById }));
                  }}
                  className=" text-white basis-1/2 w-full p-[14px] rounded-md bg-red-500"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
