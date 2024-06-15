"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FuncMessagePlantError } from "../../libs/redux/Slice/DashboardSlice";
const variants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};
export default function Message_Error({ message }) {
  const { messagePlantError } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(FuncMessagePlantError(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, messagePlantError]);
  return (
    <AnimatePresence>
      {messagePlantError && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          className="fixed w-screen h-screen grid place-items-center top-0 left-0"
        >
          <section className="px-4 py-[6px] rounded-md text-sm font-nunito  bg-red-500 text-white w-[489px] flex justify-center items-center">
            <h3 className="leading-[35px]">{message}</h3>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
