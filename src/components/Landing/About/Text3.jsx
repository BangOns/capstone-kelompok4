import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function Text3() {
  const step1ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: step1ref,
    offset: ["start end", "center"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%%", "100%"]);
  return (
    <div
      ref={step1ref}
      className="w-full h-screen grid place-items-center relative"
    >
      <motion.div
        style={{
          width,
        }}
        className="absolute top-0 left-0  h-full  bg-emerald-500"
      ></motion.div>
      <h1 className="text-3xl sm:text-7xl lg:text-[120px] font-nunito-bold  uppercase z-10">
        <span className="bg-clip-text text-transparent text-stroke-white">
          With
        </span>{" "}
        <span className="text-white">Plantopia</span>
      </h1>
    </div>
  );
}
