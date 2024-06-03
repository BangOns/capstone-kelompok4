"use client";
import React, { useRef } from "react";
import Parallax_Layout from "./About/Parallax_Layout";

import Text1 from "./About/Text1";
import Text2 from "./About/Text2";
import Text3 from "./About/Text3";
import Article_About from "./About/Article_About";

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
