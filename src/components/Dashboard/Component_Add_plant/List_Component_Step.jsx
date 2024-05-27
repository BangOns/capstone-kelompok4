import React from "react";
import Planting_Instructions from "./List_Component_Step_Component/Planting_Instructions";

export default function List_Component_Step({ pages }) {
  return (
    <>
      {/* Pages === 1 && <Component 1 */}
      {pages === 3 && <Planting_Instructions />}
      {/* Lanjutkan di bawah */}
      {/* Contoh 
  {pages === 2 && <Component />}
  */}
    </>
  );
}
