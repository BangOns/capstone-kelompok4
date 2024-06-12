import Image from "next/image";

import Asked_And_Answer from "./Component_FaQ/Asked_And_Answer";

export default function Component_FaQ({ dataPlants }) {
  return (
    <section className="-full mt-6">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">FAQ</h1>
      </header>
      <article className="w-11/12 mb-6">
        {dataPlants?.plant_faqs.map((items, i) => (
          <Asked_And_Answer dataPlants={items} key={i} />
        ))}
      </article>
    </section>
  );
}
