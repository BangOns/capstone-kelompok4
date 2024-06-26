import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FuncPlantInformationInput } from "../../../../../../libs/redux/Slice/AddPlantSlice";
import {
  getPlantCategories,
  GetPlantCAtegoriesById,
} from "../../../../../../utils/Function-FetchAPI/GetDataCategories";

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
  const [inputValue, inputValueSet] = useState("");
  const [chooseCategory, chooseCategorySet] = useState("");
  const [open, setOpen] = useState(false);
  const [allPlantCategories, allPlantCategoriesSet] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPlantCategories((items) => {
      allPlantCategoriesSet(items);
    });
  }, []);
  useEffect(() => {
    if (PlantInformationInput.plant_category_id !== 0) {
      GetPlantCAtegoriesById(
        PlantInformationInput.plant_category_id,
        (items) => {
          chooseCategorySet(items.name);
        }
      );
    }
  }, [PlantInformationInput.plant_category_id]);
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
          <p>{chooseCategory ? `${chooseCategory}` : "Select Category"}</p>
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
              value={inputValue}
              onChange={(e) => inputValueSet(e.target.value)}
              className="w-full bg-white  p-2 text-sm font-nunito border-0 focus:ring-0 outline-none"
            />
          </div>
          <ul className="w-full bg-white ">
            {allPlantCategories.length !== 0 ? (
              allPlantCategories?.map((items, i) => (
                <li
                  key={i}
                  className={`w-full px-3 group py-[14px] hover:bg-emerald-500 cursor-pointer ${
                    items?.name.toLowerCase().startsWith(inputValue)
                      ? "block"
                      : "hidden"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    dispatch(
                      FuncPlantInformationInput({
                        name: "plant_category_id",
                        value: items.id,
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
