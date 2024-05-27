import IconsAddPlant from "@/utils/Component-Icons-Add-plant/IconsAddPlant";

export default function Planting_Instructions() {
  return (
    <div className="rounded-lg border-2 mt-10">
      <div className="flex  m-[16px]">
        <div className="w-full  ">
          <div className="flex text-green-500">
            <div className="mr-[16px]">
              <IconsAddPlant />
            </div>
            <p className="text-[16px]"> Add Steps</p>
          </div>
        </div>
        <p className="w-full text-[#6B7280] text-right text-[12px] m-auto">
          If you finish editing, it will
          <span className="text-green-500"> autosave </span> when you minimize
          the box
        </p>
      </div>
    </div>
  );
}
