import Navbar from "@/components/Dashboard/navbar";
import React from "react";
export default function layout({ children }) {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      {children}
    </div>
  );
}
