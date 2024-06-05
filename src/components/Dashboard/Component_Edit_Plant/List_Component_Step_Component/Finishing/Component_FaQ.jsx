import Image from "next/image";

import Asked_And_Answer from "./Component_FaQ/Asked_And_Answer";
import { IconsImport } from "../../../../../utils/IconsImport";
import { FuncToIndex } from "../../../../../libs/redux/Slice/DashboardSlice";
import { useDispatch } from "react-redux";

export default function Component_FaQ() {
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
        />
      </header>
      <article className="w-11/12 mb-6">
        <Asked_And_Answer />
        <Asked_And_Answer />
        <Asked_And_Answer />
        <Asked_And_Answer />
        <Asked_And_Answer />
        <Asked_And_Answer />
      </article>
    </section>
  );
}
