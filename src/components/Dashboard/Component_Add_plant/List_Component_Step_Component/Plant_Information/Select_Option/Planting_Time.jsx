import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantInformationInput } from "../../../../../../libs/redux/Slice/AddPlantSlice";

const variants = {
  hidden: {
    opacity: 0,
    y: -75,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export default function Planting_Time() {
  const { PlantInformationInput, dataPlantNew } = useSelector(
    (state) => state.addplant
  );
  const [open, setOpen] = useState(false);
  const arrDataPlantingTime = ["Summer", "Autumn", "Spring", "Winter"];
  const dispatch = useDispatch();

  return (
    <section className="w-full">
      <label htmlFor="" className="font-nunito-bold text-sm pb-1">
        Planting Time <span className="text-red-500">*</span>
      </label>
      <div className="w-full relative bg-white  ">
        <div
          className="px-3 py-[14px] flex w-full justify-between items-center border rounded-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p>
            {PlantInformationInput.planting_time
              ? `${PlantInformationInput.planting_time}`
              : "Conditions"}
          </p>
          <IoIosArrowDown />
        </div>
        <motion.div
          variants={variants}
          animate={open ? "visible" : "hidden"}
          className={` bg-white w-full absolute scrollbar-thin top-16 max-h-28 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-emerald-400 scrollbar-track-white rounded-lg border overflow-y-auto z-10 ${
            open ? "block" : "hidden"
          }   `}
        >
          <ul className="w-full bg-white ">
            {arrDataPlantingTime?.map((items, i) => (
              <li
                key={i}
                className="w-full px-3 group py-[14px] hover:bg-emerald-500"
                onClick={() => {
                  setOpen(false);
                  dispatch(
                    FuncPlantInformationInput({
                      name: "planting_time",
                      value: items,
                    })
                  );
                }}
              >
                <p className="font-nunito text-sm group-hover:text-white">
                  {items}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
