import React from "react";
import Component_Plant_Information from "./Component_Plant_Information";
import Component_Reminder_Settings from "./Component_Reminder_Settings";
import Component_Planting_Steps from "./Component_Planting_Steps";
import Component_Additional_Planting_Tips from "./Component_Additional_Planting_Tips";
import Component_FaQ from "./Component_FaQ";

export default function ViewPlant() {
    return(
        <article className="w-full mt-6">
            <Component_Plant_Information />
            <Component_Reminder_Settings />
            <Component_Planting_Steps />
            <Component_Additional_Planting_Tips />
            <Component_FaQ />
        </article>
    )
}