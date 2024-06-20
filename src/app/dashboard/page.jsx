import React from "react";
import Header from "../../components/Dashboard/header";
import Stat from "../../components/Dashboard/Component_Dashboard/Stat";
import ChartPage from "../../components/Dashboard/Component_Dashboard/ChartPage";

export default function page() {
  return(
    <div>
      <Header />
      <header className="">
        <h1 className="text-[28px] font-nunito-bold text-black">Dashboard</h1>
      </header>
      <Stat />
      <ChartPage />
    </div>
  )
}
