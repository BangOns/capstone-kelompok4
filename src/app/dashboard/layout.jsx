import Navbar from "@/components/Dashboard/navbar";
import React from "react";
export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
