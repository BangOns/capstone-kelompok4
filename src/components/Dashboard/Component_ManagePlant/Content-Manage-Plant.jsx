"use client";
import { useEffect, useState } from "react";
import {
  FuncNextStepTable,
  FuncPrevStepTable,
} from "../../../libs/redux/Slice/DashboardSlice";
import TablePlant from "./Table-Plant/TablePlant";
import { useDispatch, useSelector } from "react-redux";
import { FetchDataTable } from "../../../utils/Function-FetchAPI/GetDataAllTable";
import { useDebounce } from "use-debounce";
import { GetDataPlantsByName } from "../../../utils/Function-FetchAPI/GetDataPlantsByName";
import SearchManagePlant from "./Search-Manage-Plant";

export default function ContentManagePlant() {
  const { indexStepTable } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [checkDataPlant, checkDataPlantSet] = useState({});
  const [searchValue, searchValueSet] = useState("");
  const [value] = useDebounce(searchValue, 1000);
  const [dataAllPlantsWithAPI, dataAllPlantsWithAPISet] = useState([]);
  const validateStepTable =
    dataAllPlantsWithAPI && dataAllPlantsWithAPI.plants?.length >= 10
      ? false
      : true;

  useEffect(() => {
    if (value) {
      GetDataPlantsByName(value, indexStepTable, (items) => {
        checkDataPlantSet(items);
        dataAllPlantsWithAPISet(items?.plants);
      });
    } else {
      FetchDataTable(indexStepTable, (items) => {
        checkDataPlantSet(items);
        dataAllPlantsWithAPISet(items?.plants);
      });
    }
  }, [indexStepTable, value]);

  return (
    <section className="w-full pt-2">
      <SearchManagePlant
        searchValue={searchValue}
        searchValueSet={searchValueSet}
      />
      <article className="w-full pt-[28.5px] ">
        <section className="overflow-x-auto rounded-s-2xl rounded-e-2xl custom-scrollbar">
          {checkDataPlant === null ? (
            <p className="text-center">Plants Not Found</p>
          ) : (
            <TablePlant
              dataAllPlantsWithAPI={dataAllPlantsWithAPI}
              dataAllPlantsWithAPISet={dataAllPlantsWithAPISet}
            />
          )}
        </section>
        <section className="w-full h-[52px] flex items-center justify-between">
          <p className="text-sm font-nunito text-neutral-500">
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
    </section>
  );
}
