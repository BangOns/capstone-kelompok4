import IconsAdd from "@/utils/Component-Icons-FAQ/IconAdd";
import AskedQuestion from "./FAQ/Asked-Question";
import CancelButtonPlant from "../Component_Buttons/cancel_buton_plant";
import PreviousButtonPlant from "../Component_Buttons/previous_buton_plant";
import NextButtonPlant from "../Component_Buttons/next_buton_plant";
import { useDispatch } from "react-redux";
import {
  NextStep,
  PrevStep,
} from "../../../../libs/redux/Slice/DashboardSlice";

export default function Faq() {
  const dispatch = useDispatch();
  function handleClickPrev() {
    dispatch(PrevStep());
  }
  function handleClickNext() {
    dispatch(NextStep());
  }
  return (
    <div className="rounded-lg border-2 mt-10">
      <div className="w-full   p-4">
        <div className="flex items-center justify-between p-4">
          <div className="flex justify-center gap-5 items-center text-[#10B981]">
            <div className="">
              <IconsAdd />
            </div>
            <div className="font-bold text-[16px] font-nunito-bold">
              Add Frequently Asked Questions (FAQ)
            </div>
          </div>
          <div className="text-[#6B7280] text-sm">
            If you finish editing, it will{" "}
            <i className="text-[#10B981]">autosave</i> when you minimize the box
          </div>
        </div>
        <div className="px-4">
          <AskedQuestion />
        </div>
        <div className="flex justify-between mt-10 pr-4">
          <CancelButtonPlant />
          <div className=" flex">
            <PreviousButtonPlant
              handleClick={handleClickPrev}
              disableOn={false}
            />
            <NextButtonPlant disabledOn={false} handleClick={handleClickNext} />
          </div>
        </div>
      </div>
    </div>
  );
}
