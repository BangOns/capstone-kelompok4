import React from "react";
import Watering_Frequency from "./Component_Reminder_Settings/Watering_Frequency";
import Certain_Weather_Condition from "./Component_Reminder_Settings/Certain_Weather_Condition";
import Image from "next/image";
import { IconsImport } from "../../../../../utils/IconsImport";
import { useDispatch } from "react-redux";
import { FuncToIndex } from "../../../../../libs/redux/Slice/DashboardSlice";

export default function Component_Reminder_Settings() {
  const dispatch = useDispatch();
  return (
    <section className="w-full mt-6 ">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">Reminder Settings</h1>
        <Image
          src={IconsImport.IconsEditFinishing}
          alt="edit"
          className="cursor-pointer"
          onClick={() => dispatch(FuncToIndex(2))}
        />
      </header>
      <article className="flex w-full gap-4 justify-between">
        <section className="basis-1/2 w-full border border-gray-200 rounded-[10px] p-4">
          <header className="w-full ">
            <h2 className="text-base font-nunito-bold">Watering Frequency</h2>
          </header>
          <Watering_Frequency />
        </section>
        <section className="basis-1/2 w-full border border-gray-200 rounded-[10px] p-4">
          <header className="w-full ">
            <h2 className="text-base font-nunito-bold">
              Certain Weather Condition
            </h2>
          </header>
          <article className="overflow-y-auto w-full h-36 pt-4">
            <Certain_Weather_Condition />
            <Certain_Weather_Condition />
            <Certain_Weather_Condition />
            <Certain_Weather_Condition />
          </article>
        </section>
      </article>
    </section>
  );
}
