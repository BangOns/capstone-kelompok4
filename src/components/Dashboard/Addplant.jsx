"use client";
import { useSelector } from "react-redux";
import List_Component_Step from "./Component_Add_plant/List_Component_Step";
import Header_add_plant from "./Component_Add_plant/Component_Header_Add_Plant/header_add_plant";

export default function AddPlant() {
  const { indexStep } = useSelector((state) => state.dashboard);
  return (
    <>
      <Header_add_plant pages={indexStep} />
      <List_Component_Step pages={indexStep} />
    </>
  );
}
