"use client";
import { useSelector } from "react-redux";
import Header_add_plant from "./Component_Add_plant/Component_Header/header_add_plant";
import List_Component_Step from "./Component_Add_plant/List_Component_Step";

export default function AddPlant() {
  const { indexStep } = useSelector((state) => state.dashboard);
  return (
    <>
      <Header_add_plant pages={3} />
      <List_Component_Step pages={3} />
    </>
  );
}
