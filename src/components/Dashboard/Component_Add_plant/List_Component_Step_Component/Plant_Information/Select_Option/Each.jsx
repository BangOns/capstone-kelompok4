import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantCharateristic } from "../../../../../../libs/redux/Slice/AddPlantSlice";
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
export default function Each() {
  const { plant_characteristic } = useSelector(
    (state) => state.addplant.PlantInformationInput
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const arrDataEach = ["Meter", "Centimeter"];
  return (
    <section className="w-[211px] xl:w-1/2">
      <label htmlFor="" className="font-nunito-bold text-sm pb-1">
        Unit <span className="text-red-500">*</span>
      </label>
      <div className="w-full relative bg-white ">
        <div
          className="px-3 py-[14px] flex w-full justify-between items-center border rounded-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p>
            {plant_characteristic.wide_unit
              ? `${plant_characteristic.wide_unit}`
              : "Unit..."}
          </p>
          <IoIosArrowDown />
        </div>
        <motion.div
          variants={variants}
          animate={open ? "visible" : "hidden"}
          className={` w-full absolute scrollbar-thin top-16 max-h-28 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-emerald-400 scrollbar-track-white rounded-lg border overflow-y-auto ${
            open ? "block" : "hidden"
          }   `}
        >
          <ul className="w-full bg-white ">
            {arrDataEach?.map((items, i) => (
              <li
                key={i}
                className="w-full px-3 group py-[14px] hover:bg-emerald-500"
                onClick={() => {
                  setOpen(false);
                  dispatch(
                    FuncPlantCharateristic({ name: "wide_unit", value: items })
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
