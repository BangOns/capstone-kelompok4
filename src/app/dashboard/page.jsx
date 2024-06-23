import React from "react";
import Header from "../../components/Dashboard/header";

import Visualisasi_Statistik from "../../components/Dashboard/Component_Dashboard/Visualisasi_Statistik";

export default function page() {
  return (
    <div className="w-full h-full">
      <Header />

      <Visualisasi_Statistik />
    </div>
  );
}
