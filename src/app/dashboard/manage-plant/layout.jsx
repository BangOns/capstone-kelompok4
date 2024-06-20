"use client";
import React from "react";
import Header from "@/components/Dashboard/header";
import { useSelector } from "react-redux";
export default function layout({ children }) {
  const { isMinimizeds } = useSelector((state) => state.dashboard);

  return (
    <main
      className={`${
        !isMinimizeds ? "xl:ml-56 max-xl:ml-20" : "xl:ml-24 max-xl:ml-5"
      }`}
    >
      <article className="pl-5 pr-10 bg-white h-full min-h-screen">
        <Header />
        {children}
      </article>
    </main>
  );
}
