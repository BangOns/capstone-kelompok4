"use client";
import { useRef } from "react";
import About from "../components/Landing/About";
import Hero from "../components/Landing/hero";
import NavbarLanding from "../components/Landing/navbar";
import Image from "next/image";
import { ImageImport } from "../utils/ImageImport";

export default function Home() {
  const refNavbar = useRef(null);
  return (
    <main className="overflow-x-hidden">
      <NavbarLanding refNavbar={refNavbar} />
      <Hero getRef={refNavbar} />
      <About />
    </main>
  );
}
