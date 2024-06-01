import Link from "next/link";
import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";
import { ImageImport } from "../../utils/ImageImport";
export default function Footer() {
  return (
    <div className="bg-[#ECFDF5] px-10 pt-8  text-center">
      <p className="font-[700] text-[32px]">Plantopia</p>
      <p className="font-[400] text-[14px] py-4">
        “Cultivate Dreams, Achieve the Inspiration”
      </p>
      <div>
        <Link
          className="mx-2 font-[700] text-[12px] hover:text-[#10B981]"
          href={""}
        >
          Home
        </Link>
        <Link
          className="mx-2 font-[700] text-[12px] hover:text-[#10B981]"
          href={""}
        >
          Features
        </Link>
        <Link
          className="mx-2 font-[700] text-[12px] hover:text-[#10B981]"
          href={""}
        >
          About us
        </Link>
        <Link
          className="mx-2 font-[700] text-[12px] hover:text-[#10B981]"
          href={""}
        >
          FAQ
        </Link>
      </div>
      <div className="flex pb-10 mt-10 pt-10 border-t-2 border-[#6B7280]">
        <div className="w-full flex flex-row justify-start items-center gap-[10px]">
          <Image
            src={IconsImport.IconsLogoPlantopia}
            alt="image plants"
            className="w-[35.06px] h-[44.87px]"
          />
          <p className="font-nunito-bold text-[17px] text-emerald-500 font-[700]">
            Plantopia
          </p>
        </div>
        <div className="w-full  flex flex-row justify-start items-center">
          <p className="font-[700] text-[14px] text-[#4B5563] w-full">
            ©Plantopia
            <span className="font-[400] text-[14px] pl-2">
              All Rights Reserved. Website by Team Agriculture
            </span>
          </p>
        </div>
        <div className="w-full  flex">
          <Image
            className="ml-auto"
            src={ImageImport.ImageIG}
            alt="image plants"
          />
          <Image
            className="ml-2"
            src={ImageImport.ImageFacebook}
            alt="image plants"
          />
          <Image
            className="ml-2"
            src={ImageImport.ImageTwiter}
            alt="image plants"
          />
        </div>
      </div>
    </div>
  );
}
