"use client";
import AddPlant from "@/components/Dashboard/Addplant";
import Alert_CancelPlant from "../../../../components/Dashboard/Component_Add_plant/Component-Alert/Alert_CancelPlant";

import { useSelector } from "react-redux";
import Loading_PostAndPutData from "../../../../utils/Component-Loading/Loading_PostAndPutData";
import Alert_Congratulations from "../../../../components/Dashboard/Component_Add_plant/Component-Alert/Alert_Congratulations";

export default function page() {
  const { PostDataMessageLoading } = useSelector((state) => state.addplant);
  return (
    <>
      {PostDataMessageLoading && <Loading_PostAndPutData />}

      <section className="w-full pt-2">
        <header className="">
          <h1 className="text-[28px] font-nunito-bold pb-6 text-black">
            Add Plant
          </h1>
        </header>
        <article className="w-full ">
          <AddPlant />
        </article>
      </section>
      <Alert_CancelPlant />
      <Alert_Congratulations />
    </>
  );
}
