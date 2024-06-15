"use client";
import { useSelector } from "react-redux";
import Header_add_plant from "./Component_Edit_Plant/Component_Header/header_add_plant";
import List_Component_Step from "./Component_Edit_Plant/List_Component_Step";

export default function EditPlant() {
  const { indexStep } = useSelector((state) => state.dashboard);
  return (
    <>
      <Header_add_plant pages={indexStep} />
      <List_Component_Step pages={indexStep} />
    </>
  );
}
