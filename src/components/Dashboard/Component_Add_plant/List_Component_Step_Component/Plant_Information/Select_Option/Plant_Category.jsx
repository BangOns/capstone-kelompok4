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
export default function Plant_Category() {
  const { PlantInformationInput, dataPlantNew } = useSelector(
    (state) => state.addplant
  );
  const [open, setOpen] = useState(false);
  const [allPlantCategories, allPlantCategoriesSet] = useState([]);
  const dispatch = useDispatch();
  async function getPlantCategories() {
    try {
      const response = await fetch(
        "https://be-agriculture-awh2j5ffyq-uc.a.run.app/api/v1/plants/categories",
        {
          method: "GET",
        }
      );
      const allResponse = await response.json();
      allPlantCategoriesSet(allResponse.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPlantCategories();
  }, []);
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
          <p>
            {PlantInformationInput.plant_category.hasOwnProperty("name")
              ? `${PlantInformationInput.plant_category.name}`
              : "Select Category"}
          </p>
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
            {allPlantCategories.length !== 0 ? (
              allPlantCategories?.map((items, i) => (
                <li
                  key={i}
                  className="w-full px-3 group py-[14px] hover:bg-emerald-500 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    dispatch(
                      FuncPlantInformationInput({
                        name: "plant_category",
                        value: items,
                      })
                    );
                  }}
                >
                  <p className="font-nunito text-sm group-hover:text-white">
                    {items.name}
                  </p>
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
