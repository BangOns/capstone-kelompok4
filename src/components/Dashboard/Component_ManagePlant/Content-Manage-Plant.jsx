"use client";
import { useEffect, useState } from "react";
import {
  FuncNextStepTable,
  FuncPrevStepTable,
} from "../../../libs/redux/Slice/DashboardSlice";
import TablePlant from "./Table-Plant/TablePlant";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataTable } from "../../../utils/Function-FetchAPI/GetDataAllTable";

export default function ContentManagePlant() {
  const { indexStepTable } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [dataAllPlantsWithAPI, dataAllPlantsWithAPISet] = useState([]);
  const validateStepTable =
    dataAllPlantsWithAPI && dataAllPlantsWithAPI.plants?.length >= 10
      ? false
      : true;
  useEffect(() => {
    FetchDataTable(indexStepTable, (items) => {
      dataAllPlantsWithAPISet(items);
    });
  }, [indexStepTable]);
  return (
    <article className="w-full pt-[28.5px] ">
      <section className="overflow-x-auto rounded-s-2xl rounded-e-2xl custom-scrollbar">
        <TablePlant />
      </section>
      <section className="w-full h-[52px] flex items-center justify-between">
        <p className="text-sm font-nunito">
          Showing {indexStepTable} to 10 of 100 entries
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            disabled={indexStepTable <= 1 ? true : false}
            className="p-[14px] font-nunito-bold text-base text-gray-400 "
            onClick={() => dispatch(FuncPrevStepTable())}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={validateStepTable}
            className="p-[14px] font-nunito-bold text-base text-emerald-500 disabled:text-emerald-500/60"
            onClick={() => dispatch(FuncNextStepTable())}
          >
            Next
          </button>
        </div>
      </section>
    </article>
  );
}
