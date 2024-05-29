import React from "react";
import Planting_Instructions from "./List_Component_Step_Component/Planting_Instructions";
import Plant_Infromation from "./List_Component_Step_Component/Plant_Infromation";
import Plant_Caring from "./List_Component_Step_Component/Plant_Caring";

export default function List_Component_Step({ pages }) {
  return (
    <>
      {pages === 1 && <Plant_Infromation />}
      {pages === 3 && <Planting_Instructions />}
      {pages === 4 && <Plant_Caring />}
    </>
  );
}
