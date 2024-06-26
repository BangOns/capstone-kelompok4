"use client";
import { useSelector } from "react-redux";
import List_Component_Step from "./Component_Edit_Plant/List_Component_Step";
import Header_edit_plant from "./Component_Edit_Plant/Component_Header_Edit_Plant/header_edit_plant";

export default function EditPlant() {
  const { indexStepEdit } = useSelector((state) => state.dashboard);
  return (
    <>
      <Header_edit_plant pages={indexStepEdit} />
      <List_Component_Step pages={indexStepEdit} />
    </>
  );
}
