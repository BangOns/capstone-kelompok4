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
  FuncPrevStepEdit,
} from "../../../../libs/redux/Slice/DashboardSlice";
import Message_Error from "../../../Component_Message/Message_Error";
import { useParams } from "next/navigation";
import { PostDataPlantsEdit } from "../../../../libs/redux/Slice/EditPlantSlice";
import Loading_PostAndPutData from "../../../../utils/Component-Loading/Loading_PostAndPutData";

export default function Finishing() {
  const {
    dataPlantNewEdit,
    PostDataMessageSuccessEdit,
    PostDataMessageLoadingEdit,
  } = useSelector((state) => state.editplant);
  const dispatch = useDispatch();
  const params = useParams();
  function handleClickPrev() {
    dispatch(FuncPrevStepEdit());
  }
  async function handleClickNext(e) {
    e.preventDefault();
    try {
      if (dataPlantNewEdit) {
        const DataPlantEdits = {
          ...dataPlantNewEdit,
        };
        dispatch(PostDataPlantsEdit({ data: DataPlantEdits, id: params.id }));
      }
    } catch (error) {
      console.log(error);
      dispatch(FuncMessagePlantError(true));
    }
  }
  useEffect(() => {
    if (PostDataMessageSuccessEdit) {
      if (PostDataMessageSuccessEdit.status === "success") {
        dispatch(FuncFinishAddPlant(true));
      }
    }
  }, [PostDataMessageSuccessEdit]);

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
              disabledOn={PostDataMessageLoadingEdit ? true : false}
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
