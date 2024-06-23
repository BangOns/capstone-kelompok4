"use client";
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React, { useState } from "react";
import List_Link_Page from "./Component_Navbar/List_Link_Page";
import List_Option from "./Component_Navbar/List_Option";
import { useDispatch, useSelector } from "react-redux";
import { FuncMinimized } from "../../libs/redux/Slice/DashboardSlice";

export default function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const { isMinimizeds } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    dispatch(FuncMinimized());
  };

  return (
    <nav
      className={`${
        isMinimizeds ? "w-[88px]" : "w-56"
      } z-20 h-screen px-4 py-6 bg-white fixed top-0 left-0 shadow-lg transition-all duration-300`}
    >
      <section className="w-full h-3/4">
        <header className="w-full flex gap-2 items-center px-3 py-4">
          <Image
            src={IconsImport.IconsLogoPlantopia}
            alt="logo"
            width={40}
            height={40}
            className={`transition-all duration-300 ${
              isMinimizeds ? "w-10 h-10 mx-auto mb-2" : "mb-2"
            }`}
          />
          {!isMinimizeds && (
            <h1 className="text-xl font-nunito-bold text-emerald-500 transition duration-300">
              Plantopia
            </h1>
          )}
        </header>

        <List_Link_Page isMinimized={isMinimizeds} />
      </section>
      <section className="w-full h-1/4 flex flex-col justify-end">
        <List_Option
          isMinimized={isMinimizeds}
          toggleMinimize={toggleMinimize}
        />
      </section>
    </nav>
  );
}
