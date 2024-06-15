import React from "react";
import Planting_Instructions from "./List_Component_Step_Component/Planting_Instructions";
import Plant_Infromation from "./List_Component_Step_Component/Plant_Infromation";
import Reminder_Settings from "./List_Component_Step_Component/Reminder_Settings";
import Plant_Caring from "./List_Component_Step_Component/Plant_Caring";
import Faq from "./List_Component_Step_Component/FaQ";
import Finishing from "./List_Component_Step_Component/Finishing";
import { AddPlantsProvider } from "@/hook/add-plants-providers";

export default function List_Component_Step({ pages }) {
  return (
    <AddPlantsProvider>
      {pages === 1 && <Plant_Infromation />}
      {pages === 2 && <Reminder_Settings />}
      {pages === 3 && <Planting_Instructions />}
      {pages === 4 && <Plant_Caring />}
      {pages === 5 && <Faq />}
      {pages === 6 && <Finishing />}
    </AddPlantsProvider>
  );
}
