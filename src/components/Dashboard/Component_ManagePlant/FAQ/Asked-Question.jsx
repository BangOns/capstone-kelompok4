import Image from "next/image"
import { IconsImport } from "@/utils/IconsImport";
import Answer from "./Answer";

export default function AskedQuestion(){
    return(
        <div className="w-[925px] h-[287px] mx-auto border border-[#030712] rounded-xl px-3">
                    <div className="flex justify-between items-center py-3">
                        <div className="text-[#030712] font-nunito-bold text-[14px]">
                        Frequently Asked Questions
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <div>
                                <Image className="" src={IconsImport.IconsDeletePlants} alt="add" />
                            </div>
                            <div>
                                <Image className="rotate-180" src={IconsImport.IconsDropdown} alt="add" />
                            </div>
                            
                           
                        </div>
                    </div>

                    <div className="w-[895px] h-[215px] flex items-center justify-between ">
                    <Answer name="Questions"/>
                    <Answer name="Answers"/>
                    </div>
                </div>
    )
}