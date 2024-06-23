"use client";
import { useSelector } from "react-redux";
import Message_Error from "../../../../../components/Component_Message/Message_Error";
import Alert_CancelPlant from "../../../../../components/Dashboard/Component_Edit_Plant/Component-Alert/Alert_CancelPlant";

import EditPlant from "../../../../../components/Dashboard/Editplant";
import Loading_PostAndPutData from "../../../../../utils/Component-Loading/Loading_PostAndPutData";
import Alert_Congratulations_Edit from "../../../../../components/Dashboard/Component_Edit_Plant/Component-Alert/Alert_Congratulations";

export default function page() {
  const { PostDataMessageLoadingEdit } = useSelector(
    (state) => state.editplant
  );
  return (
    <>
      {PostDataMessageLoadingEdit && <Loading_PostAndPutData />}

      <section className="w-full pt-2">
        <header className="">
          <h1 className="text-[28px] font-nunito-bold pb-6 text-black">
            Edit Plant
          </h1>
        </header>
        <article className="w-full ">
          <EditPlant />
        </article>
      </section>

      <Alert_CancelPlant />
      <Alert_Congratulations_Edit />
    </>
  );
}
