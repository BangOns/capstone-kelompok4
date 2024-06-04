import ContentManagePlant from "@/components/Dashboard/Component_ManagePlant/Content-Manage-Plant";
import SearchManagePlant from "@/components/Dashboard/Component_ManagePlant/Search-Manage-Plant";

import React from "react";
import Alert_DeletePlant from "../../../components/Dashboard/Component_Add_plant/Component-Alert/Alert_DeletePlant";
import Message_Success from "../../../components/Component_Message/Message_Success";
import Message_DeletePlant from "../../../components/Component_Message/Message_Delete";

export default function page() {
  return (
    <>
      <section className="w-full pt-2">
        <SearchManagePlant />
        <ContentManagePlant />
      </section>
      <Alert_DeletePlant />
      <Message_Success
        message={"Yay! Plant successfully added to your plant list! 🙌"}
      />
      <Message_DeletePlant message={"Plant data deleted successfully."} />
    </>
  );
}
