import React, { Fragment, useEffect } from "react";
import Component_Plant_Information from "./Finishing/Component_Plant_Information";
import Component_Reminder_Settings from "./Finishing/Component_Reminder_Settings";
import Component_Planting_Steps from "./Finishing/Component_Planting_Steps";
import Component_Additional_Planting_Tips from "./Finishing/Component_Additional_Planting_Tips";
import Component_FaQ from "./Finishing/Component_FaQ";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import { useDispatch, useSelector } from "react-redux";
import {
  FuncFinishAddPlant,
  FuncMessagePlantError,
  FuncMessagePlantSuccess,
  FuncPrevStep,
} from "../../../../libs/redux/Slice/DashboardSlice";
import Message_Error from "../../../Component_Message/Message_Error";
// import {
//   FuncAddNewDataPlants,
//   PostDataPlantsNew,
// } from "../../../../libs/redux/Slice/AddPlantSlice";
// belum menambahkan import buat edit

export default function Finishing() {
  const { dataPlantNew, PostDataMessageSuccess, PostDataMessageLoading } =
    useSelector((state) => state.editplant);
  const dispatch = useDispatch();
  function handleClickPrev() {
    dispatch(FuncPrevStep());
  }
  async function handleClickNext(e) {
    e.preventDefault();
    try {
      if (dataPlantNew) {
        const DataPlantEdits = {
          ...dataPlantEdit,
        };
        dispatch(PostDataPlantsNew(DataPlantNews));
      }
    } catch (error) {
      console.log(error);
      dispatch(FuncMessagePlantError(true));
    }
  }
  useEffect(() => {
    if (PostDataMessageSuccess) {
      if (PostDataMessageSuccess.status === "success") {
        dispatch(FuncFinishAddPlant(true));
        // belom keubah ke edit karena clueless
      }
    }
  }, [PostDataMessageSuccess]);

  return (
    <Fragment>
      <article className="w-full mt-6 ">
        <Component_Plant_Information />
        <Component_Reminder_Settings />
        <Component_Planting_Steps />
        <Component_Additional_Planting_Tips />
        <Component_FaQ />
        <div className="flex justify-between mt-10">
          <CancelButtonPlant />
          <div className=" flex">
            <PreviousButtonPlant
              handleClick={handleClickPrev}
              disableOn={false}
            />
            <NextButtonPlant
              disabledOn={PostDataMessageLoading ? true : false}
              finish={true}
              handleClick={handleClickNext}
            />
          </div>
        </div>
      </article>
      <Message_Error
        message={
          "Uh oh! You need to fill out the data first before move on to next step~"
        }
      />
    </Fragment>
  );
}
