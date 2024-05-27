import Header_add_plant from "./Component_Add_plant/Component_Header/header_add_plant";
import List_Component_Step from "./Component_Add_plant/List_Component_Step";

export default function AddPlant() {
  return (
    <>
      <Header_add_plant pages={3} />
      <List_Component_Step pages={3} />
      <div className="flex mt-10">
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
    </>
  );
}
