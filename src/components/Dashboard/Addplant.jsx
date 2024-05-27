import Header_add_plant from "./Component_Add_plant/Component_Header/header_add_plant";
import List_Component_Step from "./Component_Add_plant/List_Component_Step";

export default function AddPlant() {
  return (
    <>
      <Header_add_plant pages={1} />
      <div className="mt-6 p-4 border rounded-[10px]">
        <List_Component_Step pages={1} />
        <div className="flex justify-between mt-10">
          <div className="">
            <button className="text-[#10B981] p-[14px]">Cancel</button>
          </div>
          <div className=" flex">
            <button className="ml-auto rounded-[14px] bg-[#D1FAE5] text-[#10B981]  font-nunito-bold p-[14px] gap-4 w-[158px]">
              Previous
            </button>
            <button className="ml-[16px] rounded-[14px] bg-[#10B981] text-white font-nunito-bold p-[14px] gap-4 w-[158px]">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
