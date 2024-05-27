import Image from "next/image"
import AskedQuestion from "@/components/Dashboard/Component_ManagePlant/FAQ/Asked-Question";
import IconsAdd from "@/utils/Components-Icon-FAQ/IconAdd";

export default function Page (){
    return(
        <div className="w-[997px] h-[483px] border rounded-xl font-nunito">
            <div className="w-[965px] h-[383px]  mx-4 mt-4">

                <div className="flex items-center justify-between px-2">
                    <div className="flex justify-center gap-5 items-center w-[366px] h-[56px] text-[#10B981]">
                        <div className="">
                        <IconsAdd/>
                        </div>

                        <div className="font-bold text-[16px] font-nunito-bold">
                        Add Frequently Asked Questions (FAQ)
                        </div>
                    </div>
                    <div className="text-[#6B7280] text-sm">
                    If you finish editing, it will <i className="text-[#10B981]">autosave</i> when you minimize the box
                    </div>
                </div>
                
                <AskedQuestion/>
            </div>
            <div className="w-[965px] h-[52px] flex items-center justify-between mx-auto ">
                <div className="text-[#10B981] font-nunito-bold mx-5">
                    Cancel
                </div>
                <div className="flex justify-between items-center h-full w-[328px]">
                    <div className="w-[158px] h-full flex items-center justify-center bg-green-100 text-[#10B981] rounded-lg">
                        Previous
                    </div>
                    <div className="w-[158px] h-full flex items-center justify-center bg-[#10B981] text-white rounded-lg">
                        Next
                    </div>
                </div>
            </div>
        </div>
    )
}