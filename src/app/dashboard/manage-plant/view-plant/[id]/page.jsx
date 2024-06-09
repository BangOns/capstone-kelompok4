import React from "react"
import ViewPlant from "@/components/Dashboard/Component_View_Plant/ViewPlant"

export default function page(){
    return(
        <section className="w-full pt-2">
            <header className="">
                <h1 className="text-[28px] font-nunito-bold">View Plant</h1>
            </header>
            <article className="w-full">
                <ViewPlant/>
            </article>
        </section>
    )
}