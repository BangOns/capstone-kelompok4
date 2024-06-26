import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FuncPlantCharateristicEdit,
  FuncPlantInformationInputEdit,
} from "../../../../../../libs/redux/Slice/EditPlantSlice";

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
export default function Leaf_Color() {
  const { dataPlantNewEdit, dataPlantEditFullField } = useSelector(
    (state) => state.editplant
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const arrDataLeafColor = ["Yellow", "Green", "Red", "White"];
  useEffect(() => {
    if (dataPlantEditFullField.data) {
      dispatch(
        FuncPlantInformationInputEdit({
          name: "plant_characteristic",
          value: dataPlantNewEdit.plant_characteristic
            ? dataPlantNewEdit.plant_characteristic
            : dataPlantEditFullField.data.plant_characteristic,
        })
      );
    }
  }, [dataPlantEditFullField]);
  return (
    <section className="w-full">
      <label htmlFor="" className="font-nunito-bold text-sm pb-1">
        Leaf Color <span className="text-red-500">*</span>
      </label>
      <div className="w-full relative bg-white ">
        <div
          className="px-3 py-[14px] flex w-full justify-between items-center border rounded-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p>
            {dataPlantNewEdit.plant_characteristic?.leaf_color
              ? `${dataPlantNewEdit.plant_characteristic.leaf_color}`
              : "Colors"}
          </p>
          <IoIosArrowDown />
        </div>
        <motion.div
          variants={variants}
          animate={open ? "visible" : "hidden"}
          className={`w-full absolute scrollbar-thin top-16 max-h-40 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-thumb-emerald-400 scrollbar-track-white rounded-lg border overflow-y-auto ${
            open ? "block" : "hidden"
          }  `}
        >
          <ul className="w-full bg-white ">
            {arrDataLeafColor?.map((items, i) => (
              <li
                key={i}
                className="w-full px-3 group py-[14px] hover:bg-emerald-500"
                onClick={() => {
                  setOpen(false);
                  dispatch(
                    FuncPlantCharateristicEdit({
                      name: "leaf_color",
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
