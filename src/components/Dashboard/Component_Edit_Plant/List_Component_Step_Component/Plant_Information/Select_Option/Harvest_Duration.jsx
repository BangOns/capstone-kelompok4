import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantInformationInputEdit } from "../../../../../../libs/redux/Slice/EditPlantSlice";

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
export default function Harvest_Duration() {
  const { dataPlantEditFullField, dataPlantNewEdit } = useSelector(
    (state) => state.editplant
  );
  const [open, setOpen] = useState(false);
  const arrDataHarvestDuration = [
    "1 Month",
    "3 Months",
    "6 Months",
    "9 Months",
    "12 Months",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    if (dataPlantEditFullField.data) {
      dispatch(
        FuncPlantInformationInputEdit({
          name: "harvest_duration",
          value: dataPlantNewEdit.harvest_duration
            ? dataPlantNewEdit.harvest_duration
            : dataPlantEditFullField.data.harvest_duration,
        })
      );
    }
  }, [dataPlantEditFullField]);
  return (
    <section className="basis-[23%] w-full">
      <label htmlFor="" className="font-nunito-bold text-sm pb-1">
        Harvest Duration <span className="text-red-500">*</span>
      </label>
      <div className="w-full relative bg-white ">
        <div
          className="px-3 py-[14px] flex w-full justify-between items-center border rounded-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p>
            {dataPlantNewEdit.harvest_duration &&
              `${dataPlantNewEdit.harvest_duration} month`}
          </p>
          <IoIosArrowDown />
        </div>
        <motion.div
          variants={variants}
          animate={open ? "visible" : "hidden"}
          className={` w-full absolute scrollbar-thin top-16 max-h-40 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-emerald-400 scrollbar-track-white rounded-lg border overflow-y-auto z-10 ${
            open ? "block" : "hidden"
          }   `}
        >
          <ul className="w-full bg-white ">
            {arrDataHarvestDuration?.map((items, i) => (
              <li
                key={i}
                className="w-full px-3 group py-[14px] hover:bg-emerald-500"
                onClick={() => {
                  dispatch(
                    FuncPlantInformationInputEdit({
                      name: "harvest_duration",
                      value: parseInt(items.split(" ")[0]),
                    })
                  );
                  setOpen(false);
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
