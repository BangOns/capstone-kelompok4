import Image from "next/image";

import Asked_And_Answer from "./Component_FaQ/Asked_And_Answer";
import { IconsImport } from "../../../../../utils/IconsImport";
import { FuncToIndex } from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Component_FaQ() {
  const { dataPlantNew } = useSelector((state) => state.addplant);
  const dispatch = useDispatch();
  return (
    <section className="-full mt-6">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">FAQ</h1>
        <Image
          src={IconsImport.IconsEditFinishing}
          alt="edit"
          className="cursor-pointer"
          onClick={() => dispatch(FuncToIndex(5))}
          height={24}
          width={24}
        />
      </header>
      <article className="w-11/12 mb-6">
        {dataPlantNew.plant_faqs?.map((items, i) => (
          <Asked_And_Answer key={i} dataPlants={items} />
        ))}
      </article>
    </section>
  );
}
