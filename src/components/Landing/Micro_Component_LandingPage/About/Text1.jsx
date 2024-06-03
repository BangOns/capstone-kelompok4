import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function Text1() {
  const step1ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: step1ref,
    offset: ["center", "start end"],
  });
  const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);
  return (
    <div className="w-full h-screen grid place-items-center">
      <motion.h1
        ref={step1ref}
        style={{
          opacity,
        }}
        className="text-3xl sm:text-7xl lg:text-[120px] font-nunito-bold  uppercase "
      >
        <span className="bg-clip-text text-transparent text-stroke-3">
          Start
        </span>{" "}
        <span className="text-emerald-500">Planting</span>
      </motion.h1>
    </div>
  );
}
