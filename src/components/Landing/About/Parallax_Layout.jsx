"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImageImport } from "../../../utils/ImageImport";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export default function Parallax_Layout({ elementRef }) {
  const [isFixedTop, setIsFixedTop] = useState(0);
  const [isFixedBottom, setIsFixedBottom] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const top = elementRef.current.getBoundingClientRect().top;
        const bottom =
          elementRef.current.getBoundingClientRect().height - window.scrollY;

        setIsFixedBottom(bottom);
        setIsFixedTop(top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <div ref={elementRef} className={`w-screen h-screen  overflow-hidden`}>
        <div
          className={`w-full h-full   z-[11]
    ${
      isFixedTop < 0 && isFixedBottom > 0
        ? "fixed top-[90px] left-0"
        : "absolute"
    }
    `}
        >
          <motion.div
            variants={variants}
            animate={isFixedTop < 0 && isFixedBottom > 0 ? "visible" : "hidden"}
            transistion={{ duration: 0.3, ease: "easeInOut" }}
            className="blur-[25px] absolute top-0 -left-[50px] lg:-top-[176px] lg:-left-[115px]"
          >
            <Image
              src={ImageImport.ImageParallax1}
              alt="parallax"
              className="rotate-[38deg] w-[170px] h-[170px] lg:w-[362px] lg:h-[362px]"
              width={362}
              height={362}
            />
          </motion.div>
          <motion.div
            variants={variants}
            animate={isFixedTop < 0 && isFixedBottom > 0 ? "visible" : "hidden"}
            transistion={{ duration: 0.3, ease: "easeInOut" }}
            className=" absolute top-0 -right-14 lg:-top-[66px] lg:-right-[115px]"
          >
            <Image
              src={ImageImport.ImageParallax2}
              alt="parallax"
              className="-rotate-[45deg] w-[180px] h-[180px] lg:w-[362px] lg:h-[362px]"
              width={362}
              height={362}
            />
          </motion.div>
          <motion.div
            variants={variants}
            animate={isFixedTop < 0 && isFixedBottom > 0 ? "visible" : "hidden"}
            transistion={{ duration: 0.3, ease: "easeInOut" }}
            className=" absolute bottom-7 -left-10 lg:-bottom-[66px] lg:-left-[130px]"
          >
            <Image
              src={ImageImport.ImageParallax3}
              alt="parallax"
              className="-rotate-[10deg] w-[170px] h-[170px] lg:w-[362px] lg:h-[362px]"
              width={362}
              height={362}
            />
          </motion.div>
          <motion.div
            variants={variants}
            animate={isFixedTop < 0 && isFixedBottom > 0 ? "visible" : "hidden"}
            transistion={{ duration: 0.3, ease: "easeInOut" }}
            className="blur-[25px] absolute bottom-10 -right-5 lg:-bottom-[100px] lg:-right-[100px]"
          >
            <Image
              src={ImageImport.ImageParallax1}
              alt="parallax"
              className="-rotate-[6.2deg] w-[170px] h-[170px] lg:w-[362px] lg:h-[362px]"
              width={362}
              height={362}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
