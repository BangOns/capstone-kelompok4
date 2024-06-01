import Image from "next/image";
import { ImageImport } from "../../utils/ImageImport";
import { IconsImport } from "../../utils/IconsImport";

export default function CTA() {
  return (
    <div className="mt-[251px]">
      <div className="bg-[#10B981] rounded-[90px] w-[1296px] h-[415px] relative overflow-hidden">
        <Image
          src={ImageImport.ImageBgCTA}
          alt="Bg CTA"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 pl-20 pt-12">
          <Image src={ImageImport.ImageHpCTA} alt="Hp CTA" />
        </div>
        <div className="flex flex-col absolute inset-0 justify-center pl-[650px]">
          <h3 className="text-white font-nunito-bold text-5xl leading-normal">
            Download Now!
          </h3>
          <p className="text-[#FAFAFC] font-nunito font-semibold text-2xl leading-normal">
            Download Now and <br /> Cultivate Dreams, Achieve the Inspiration!
          </p>
          <button className="pt-5">
            <Image src={IconsImport.IconsGooglePlay} alt="Google Play Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
