import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

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
export default function Plant_Category() {
  const [open, setOpen] = useState(false);
  return (
    <section className="basis-[23%] w-full">
      <label htmlFor="" className="font-nunito-bold text-sm pb-1">
        Plant Category <span className="text-red-500">*</span>
      </label>
      <div className="w-full relative bg-white ">
        <div
          className="px-3 py-[14px] flex w-full justify-between items-center border rounded-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p>Select Category</p>
          <IoIosArrowDown />
        </div>
        <motion.div
          variants={variants}
          animate={open ? "visible" : "hidden"}
          className={` w-full absolute scrollbar-thin top-16 max-h-40 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-emerald-400 scrollbar-track-white rounded-lg border overflow-y-auto ${
            open ? "block" : "hidden"
          }  `}
        >
          <div className="w-full flex sticky items-center px-2  bg-white top-0">
            <CiSearch className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search Category"
              className="w-full   p-2 text-sm font-nunito border-0  focus:ring-0 outline-none"
            />
          </div>
          <ul className="w-full bg-white ">
            <li className="w-full px-3 group py-[14px] hover:bg-emerald-500">
              <p className="font-nunito text-sm group-hover:text-white">
                Fruits
              </p>
            </li>
            <li className="w-full px-3 group py-[14px] hover:bg-emerald-500">
              <p className="font-nunito text-sm group-hover:text-white">
                Fruits
              </p>
            </li>
            <li className="w-full px-3 group py-[14px] hover:bg-emerald-500">
              <p className="font-nunito text-sm group-hover:text-white">
                Fruits
              </p>
            </li>
            <li className="w-full px-3 group py-[14px] hover:bg-emerald-500">
              <p className="font-nunito text-sm group-hover:text-white">
                Fruits
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
