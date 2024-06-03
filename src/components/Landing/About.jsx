"use client";
import React, { useRef } from "react";
import Parallax_Layout from "./Micro_Component_LandingPage/About/Parallax_Layout";
import {
  useScroll,
  motion,
  useInView,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Text1 from "./Micro_Component_LandingPage/About/Text1";
import Text2 from "./Micro_Component_LandingPage/About/Text2";
import Text3 from "./Micro_Component_LandingPage/About/Text3";
import Image from "next/image";
import { ImageImport } from "../../utils/ImageImport";
import Article_About from "./Micro_Component_LandingPage/About/Article_About";

export default function About() {
  const elementRef = useRef(null);

  return (
    <>
      <article
        ref={elementRef}
        className="w-screen h-[400vh]  overflow-x-hidden relative"
      >
        <Parallax_Layout elementRef={elementRef} />
        <Text1 />
        <Text2 />
        <Text3 />
      </article>
      <Article_About />
    </>
  );
}
