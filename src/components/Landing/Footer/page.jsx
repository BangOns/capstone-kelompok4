import Link from "next/link";
import IconsIG from "../../../utils/Component-Icons-Footer/IconInstagram";
import IconsLogo from "../../../utils/Component-Icons-Footer/IconLogo";
import IconsFB from "../../../utils/Component-Icons-Footer/IconsFacebook";
import IconsTW from "../../../utils/Component-Icons-Footer/IconsTwitter";

export default function FooterComponent() {
  return (
    <div className="w-full md:h-[312px]  bg-[#ECFDF5]">
      <div className="w-full h-[111px]  mx-auto py-5 ">
        <h1 className="text-[#030712] text-center font-nunito-bold text-[32px]">
          Plantopia
        </h1>
        <h1 className="text-[#030712] text-center font-nunito text-[14px] my-2">
          “Cultivate Dreams, Achieve the Inspiration”
        </h1>
        <div className="flex items-center justify-between w-[231px] h-4 mx-auto font-nunito">
          <Link href="#">
            <div className="text-[#030712] text-nunito font-bold text-[12px]">
              Home
            </div>
          </Link>
          <Link href="#">
            <div className="text-[#030712] text-nunito font-bold text-[12px]">
              Features
            </div>
          </Link>
          <Link href="#">
            <div className="text-[#030712] text-nunito font-bold text-[12px]">
              About us
            </div>
          </Link>
          <Link href="#">
            <div className="text-[#030712] text-nunito font-bold text-[12px]">
              FAQ
            </div>
          </Link>
        </div>
      </div>
      <div className=" px-10 md:px-16 my-8">
        <hr className="w-full border-t border-[#6B7280]  " />
      </div>
      <div className="md:flex items-center xl:justify-between md:justify-center md:gap-5 px-20 sm:flex-wrap sm:justify-center text-center ">
        <div className="w-[120px] h-[45px] flex justify-between items-center mx-auto">
          <IconsLogo w={"45"} h={"55"} />
          <div className="text-[17px] text-[#10B981] font-semibold">
            Plantopia
          </div>
        </div>
        <div className="text-[#4B5563] font-nunito py-5">
          <span className=" mr-1 font-nunito-bold">©Plantopia</span> All Rights
          Reserved. Website by Team Agriculture
        </div>
        <div className="flex items-center justify-between w-[172px] h-[52px] mx-auto pb-5">
          <div className="bg-[#6EE7B7] rounded-2xl w-[52px] h-[52px] flex items-center justify-center">
            <IconsIG />
          </div>
          <div className="bg-[#6EE7B7] rounded-2xl w-[52px] h-[52px] flex items-center justify-center">
            <IconsFB />
          </div>
          <div className="bg-[#6EE7B7] rounded-2xl w-[52px] h-[52px] flex items-center justify-center">
            <IconsTW />
          </div>
        </div>
      </div>
    </div>
  );
}
