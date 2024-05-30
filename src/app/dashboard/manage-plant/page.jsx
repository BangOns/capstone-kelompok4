import ContentManagePlant from "@/components/Dashboard/Component_ManagePlant/Content-Manage-Plant";
import SearchManagePlant from "@/components/Dashboard/Component_ManagePlant/Search-Manage-Plant";

import React from "react";
import Alert_DeletePlant from "../../../components/Dashboard/Component_Add_plant/Component-Alert/Alert_DeletePlant";

export default function page() {
  return (
    <>
      <section className="w-full pt-2">
        <SearchManagePlant />
        <ContentManagePlant />
      </section>
      <Alert_DeletePlant />
    </>
  );
}
