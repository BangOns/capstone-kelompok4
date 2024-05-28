// Roni
"use client"
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React, { useState } from "react";
import List_Link_Page from "./Component_Navbar/List_Link_Page";
import List_Option from "./Component_Navbar/List_Option";

export default function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <nav
      className={`${
        isMinimized ? "w-[88px]" : "w-56"
      } h-screen px-4 py-6 bg-white fixed top-0 left-0 shadow-lg transition-all duration-300`}
    >
      <section className="w-full h-3/4">
        <header className="w-full flex gap-2 items-center px-3 py-4">
          <Image
            src={IconsImport.IconsLogoPlantopia}
            alt="logo"
            className={`transition-all duration-300 ${
              isMinimized ? "w-10 h-10 mx-auto mb-2" : "mb-2"
            }`}
          />
          {!isMinimized && (
            <h1 className="text-xl font-nunito-bold text-emerald-500">
              Plantopia
            </h1>
          )}
        </header>

        <List_Link_Page isMinimized={isMinimized} />
      </section>
      <section className="w-full h-1/4">
        <List_Option isMinimized={isMinimized} toggleMinimize={toggleMinimize} />
      </section>
    </nav>
  );
}
