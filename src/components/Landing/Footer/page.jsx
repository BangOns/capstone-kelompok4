import { Link as ScrollLink } from "react-scroll";
import IconsIG from "../../../utils/Component-Icons-Footer/IconInstagram";
import { IconsImport } from "../../../utils/IconsImport";
import IconsFB from "../../../utils/Component-Icons-Footer/IconsFacebook";
import IconsTW from "../../../utils/Component-Icons-Footer/IconsTwitter";
import Image from "next/image";

export default function FooterComponent() {
  return (
    <div className="w-full md:h-[312px]  bg-emerald-500">
      <div className="w-full h-[111px]  mx-auto py-5 ">
        <h1 className="text-white text-center font-nunito-bold text-[32px]">
          Plantopia
        </h1>
        <h1 className="text-white text-center font-nunito text-[14px] my-2">
          “Cultivate Dreams, Achieve the Inspiration”
        </h1>
        <div className="flex items-center justify-between w-[231px] h-4 mx-auto font-nunito">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-white text-nunito text-[12px]"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="text-white text-nunito text-[12px]"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-nunito text-[12px]"
          >
            About us
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className="text-white text-nunito text-[12px]"
          >
            FAQ
          </ScrollLink>
        </div>
      </div>
      <div className=" px-10 md:px-16 my-8">
        <hr className="w-full border-t border-neutral-200  " />
      </div>
      <div className="md:flex items-center xl:justify-between md:justify-center md:gap-5 px-20 sm:flex-wrap sm:justify-center text-center ">
        <div className="w-[120px] h-[45px] flex justify-between items-center mx-auto">
          <Image src={IconsImport.IconsLogoLight} />
          <div className="text-[17px] text-white font-semibold">Plantopia</div>
        </div>
        <div className="text-white font-nunito py-5">
          <span className=" mr-1 font-nunito-bold">©Plantopia</span> All Rights
          Reserved. Website by Team Agriculture
        </div>
        <div className="flex items-center justify-between w-[172px] h-[52px] mx-auto pb-5">
          <div className="bg-white rounded-2xl w-[52px] h-[52px] flex items-center justify-center">
            <IconsIG />
          </div>
          <div className="bg-white rounded-2xl w-[52px] h-[52px] flex items-center justify-center">
            <IconsFB />
          </div>
          <div className="bg-white rounded-2xl w-[52px] h-[52px] flex items-center justify-center">
            <IconsTW />
          </div>
        </div>
      </div>
    </div>
  );
}
