"use client";
import React from "react";
import Header from "@/components/Dashboard/header";
export default function layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
