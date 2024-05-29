import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";
import Answer from "./AnswerQuestion";

export default function AskedQuestion() {
  return (
    <div className="w-full border border-[#030712] rounded-xl pb-4">
      <div className="flex justify-between items-center p-4">
        <div className="text-[#030712] font-nunito-bold text-[14px]">
          Frequently Asked Questions
        </div>
        <div className="flex items-center justify-center gap-5">
          <div>
            <Image className="" src={IconsImport.IconsDeletePlants} alt="add" />
          </div>
          <div>
            <Image
              className="rotate-180"
              src={IconsImport.IconsDropdown}
              alt="add"
            />
          </div>
        </div>
      </div>

      <div className="w-full gap-4 flex items-center justify-between px-4">
        <Answer name="Questions" />
        <Answer name="Answers" />
      </div>
    </div>
  );
}
