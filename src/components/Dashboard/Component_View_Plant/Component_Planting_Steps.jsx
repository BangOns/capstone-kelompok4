import React from "react";

import Component_Steps from "./Component_Planting_Steps/Component_Steps";
import Image from "next/image";

export default function Component_Planting_Steps() {
  return (
    <section className="w-full mt-6">
      <header className="w-full py-[12.5px] flex justify-between">
        <h1 className="font-nunito-bold text-xl">Planting Steps</h1>
      </header>
      <article className="w-11/12">
        <Component_Steps />
        <Component_Steps />
        <Component_Steps />
        <Component_Steps />
      </article>
    </section>
  );
}
