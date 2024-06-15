"use client";
import Alert_CancelPlant from "../../../../../components/Dashboard/Component_Edit_Plant/Component-Alert/Alert_CancelPlant";
import Alert_Congratulations from "../../../../../components/Dashboard/Component_Edit_Plant/Component-Alert/Alert_Congratulations";
import EditPlant from "../../../../../components/Dashboard/Editplant";

export default function page() {
  return (
    <>
      <section className="w-full pt-2">
        <header className="">
          <h1 className="text-[28px] font-nunito-bold pb-6">Edit Plant</h1>
        </header>
        <article className="w-full ">
          <EditPlant />
        </article>
      </section>
      <Alert_CancelPlant />
      <Alert_Congratulations />
    </>
  );
}
