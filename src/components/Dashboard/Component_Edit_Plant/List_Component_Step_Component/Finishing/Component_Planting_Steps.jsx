import React from "react";

import Component_Steps from "./Component_Planting_Steps/Component_Steps";
import Image from "next/image";
import { IconsImport } from "../../../../../utils/IconsImport";
import { FuncToIndexEdit } from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Component_Planting_Steps() {
  const dispatch = useDispatch();
  const { dataPlantNewEdit } = useSelector((state) => state.editplant);
  return (
    <section className="w-full mt-6">
      <header className="w-full py-[12.5px] flex justify-between">
        <h1 className="font-nunito-bold text-xl">Planting Steps</h1>
        <Image
          src={IconsImport.IconsEditFinishing}
          alt="edit"
          className="cursor-pointer"
          onClick={() => dispatch(FuncToIndexEdit(3))}
        />
      </header>
      <article className="w-11/12">
        {dataPlantNewEdit.plant_instructions?.map((items, i) => (
          <Component_Steps dataPlantNew={items} key={i} />
        ))}
      </article>
    </section>
  );
}
