"use client";
import { useRef } from "react";
import About from "../components/Landing/About";
import CTA from "../components/Landing/CTA";
import FAQ from "../components/Landing/FAQ/FAQsection";
import Hero from "../components/Landing/hero";
import NavbarLanding from "../components/Landing/navbar";
import Mitra from "../components/Landing/Mitra";
import Explore from "../components/Landing/Explore";
import Footer from "../components/Landing/foot";

export default function Home() {
  const refNavbar = useRef(null);
  return (
    <main className="overflow-x-hidden">
      <NavbarLanding refNavbar={refNavbar} />
      <Hero getRef={refNavbar} />
      <Mitra />
      <Explore />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
