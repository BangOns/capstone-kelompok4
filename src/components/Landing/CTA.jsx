import Image from "next/image";
import { ImageImport } from "../../utils/ImageImport";
import { IconsImport } from "../../utils/IconsImport";

export default function CTA() {
  return (
    <div className="mt-20 pb-14 md:mt-32 md:pb-20 lg:mt-[251px] lg:pb-[110px] mx-[12.5px] md:mx-[35px] lg:mx-[71px] m-auto">
      {/* Dekstop */}
      <div className="bg-[#10B981] rounded-[60px] lg:rounded-[90px] w-full h-[415px] overflow-hidden hidden lg:grid grid-cols-2 grid-flow-col lg:grid-flow-row lg:grid-cols-12 gap-5 lg:gap-10">
        <div className="relative col-span-6">
          <div className="w-[640px] h-[640px] xl:w-[742px] xl:h-[742px] absolute top-1/2 -translate-y-1/2 -left-56 xl:-left-52 2xl:-left-36">
            <Image
              src={ImageImport.ImageBgCTA}
              alt="Bg CTA"
              width={1000}
              height={1000}
              className="object-contain w-full h-full rounded-full grayscale-[20%]"
            />
          </div>

          <Image
            src={ImageImport.ImageHpCTA}
            alt="Hp CTA"
            width={1000}
            height={1000}
            className="object-contain absolute top-[46px] left-10 xl:left-16 2xl:left-[88px] w-[320px] xl:w-[380px]"
          />
        </div>
        <div className="flex flex-col items-start h-full justify-center col-span-6">
          <h3 className="text-white font-nunito-bold text-lg md:text-3xl lg:text-5xl leading-normal pb-2">
            Download Now!
          </h3>
          <p className="text-[#FAFAFC] font-nunito font-medium md:font-semibold text-sm md:text-xl lg:text-2xl leading-normal">
            Download Now and <br /> Cultivate Dreams, Achieve the Inspiration!
          </p>
          <button className="pt-5">
            <Image
              src={IconsImport.IconsGooglePlay}
              alt="Google Play Icon"
              width={144}
              height={41.6}
              className="object-contain w-[144px] h-[41.6px]"
            />
          </button>
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden block bg-[#10B981] rounded-[52px] p-10 relative overflow-hidden">
        <div className="absolute z-[0] -right-64 sm:-right-24 md:-right-10 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-50">
          <Image
            src={ImageImport.ImageBgCTA}
            alt="Bg CTA"
            width={1000}
            height={1000}
            className="object-contain w-full h-full rounded-full grayscale-[20%]"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src={ImageImport.ImageHpCTA}
            alt="Hp CTA"
            width={1000}
            height={1000}
            className="object-contain absolute top-2 right-10 w-[200px]"
          />
        </div>
        <div className="flex flex-col items-start h-full justify-center relative z-0">
          <h3 className="text-white font-nunito-bold text-lg md:text-3xl lg:text-5xl leading-normal pb-2">
            Download Now!
          </h3>
          <p className="text-[#FAFAFC] font-nunito font-medium md:font-semibold text-sm md:text-xl lg:text-2xl leading-normal">
            Download Now and <br className="hidden sm:block" /> Cultivate
            Dreams, Achieve the Inspiration!
          </p>
          <button className="pt-5">
            <Image
              src={IconsImport.IconsGooglePlay}
              alt="Google Play Icon"
              width={144}
              height={41.6}
              className="object-contain w-[144px] h-[41.6px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
