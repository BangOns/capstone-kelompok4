import React from "react";
import Planting_Instructions from "./List_Component_Step_Component/Planting_Instructions";
import Plant_Infromation from "./List_Component_Step_Component/Plant_Infromation";

export default function List_Component_Step({ pages }) {
  return (
    <>
      {/* Pages === 1 && <Component 1 */}
      {pages === 1 && <Plant_Infromation />}
      {pages === 3 && <Planting_Instructions />}
      {/* Lanjutkan di bawah */}
      {/* Contoh 
  {pages === 2 && <Component />}
  */}
    </>
  );
}
