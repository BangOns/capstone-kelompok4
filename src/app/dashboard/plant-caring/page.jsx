import Header from "@/components/Dashboard/header";
import InputPlantCaring from "@/components/Dashboard/Component_PlantCaring/InputPlantCaring";
import React from "react";

export default function page() {
  return (
    <section className="w-full pt-2">
      <Header/>
      <InputPlantCaring/>
    </section>
  );
}
