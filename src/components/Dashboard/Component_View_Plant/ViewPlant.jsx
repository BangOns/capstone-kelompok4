"use client"

import React from "react";
import Component_Plant_Information from "./Component_Plant_Information";
import Component_Reminder_Settings from "./Component_Reminder_Settings";
import Component_Planting_Steps from "./Component_Planting_Steps";
import Component_Additional_Planting_Tips from "./Component_Additional_Planting_Tips";
import Component_FaQ from "./Component_FaQ";
import { useRouter } from "next/navigation";

export default function ViewPlant() {
    const router = useRouter();
    return(
        <article className="w-full">    
            <button 
                className="text-emerald-500 hover:text-emerald-600 py-[14px]"
                onClick={() => router.push("/dashboard/manage-plant")}
            >
                Back
            </button>       
            <Component_Plant_Information />
            <Component_Reminder_Settings />
            <Component_Planting_Steps />
            <Component_Additional_Planting_Tips />
            <Component_FaQ />
        </article>
    )
}