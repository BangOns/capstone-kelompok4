import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
// import { FuncPlantCharateristic } from "../../../../../../libs/redux/Slice/AddPlantSlice";
import { FuncPlantCharateristicEdit } from "../../../../../../libs/redux/Slice/EditPlantSlice";
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
export default function Unit() {
  const { plant_characteristicEdit } = useSelector(
    (state) => state.editplant.PlantInformationInputEdit
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const arrDataUnit = ["Meter", "Centimeter"];
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
            {plant_characteristicEdit.height_unit
              ? `${plant_characteristicEdit.height_unit}`
              : "Unit..."}
          </p>
          <IoIosArrowDown />
        </div>
        <motion.div
          variants={variants}
          animate={open ? "visible" : "hidden"}
          className={` w-full absolute scrollbar-thin top-16 max-h-28 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-emerald-400 scrollbar-track-white rounded-lg border overflow-y-auto z-10 ${
            open ? "block" : "hidden"
          }   `}
        >
          <ul className="w-full bg-white ">
            {arrDataUnit?.map((items, i) => (
              <li
                key={i}
                className="w-full px-3 group py-[14px] hover:bg-emerald-500"
                onClick={() => {
                  setOpen(false);
                  dispatch(
                    FuncPlantCharateristicEdit({
                      name: "height_unit",
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
