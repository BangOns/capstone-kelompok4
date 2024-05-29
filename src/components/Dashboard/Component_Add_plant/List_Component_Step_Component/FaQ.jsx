import IconsAdd from "@/utils/Component-Icons-FAQ/IconAdd";
import AskedQuestion from "./FAQ/Asked-Question";

export default function Faq() {
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
        <div className="flex mt-10 items-center px-4">
          <div className="w-full">
            <button className="text-[#10B981]">Cancel</button>
          </div>
          <div className="w-full flex">
            <button className="ml-auto rounded-[14px] bg-[#D1FAE5] text-[#10B981]  font-nunito-bold p-[14px] gap-4 w-[158px]">
              Previous
            </button>
            <button className="ml-[16px] rounded-[14px] bg-[#10B981] text-white font-nunito-bold p-[14px] gap-4 w-[158px]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
