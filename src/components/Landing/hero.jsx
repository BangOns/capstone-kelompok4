import React from "react";
import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
import { IconsImport } from "@/utils/IconsImport";

export default function Hero({ getRef }) {
  return (
    <div
      className={`flex flex-col-reverse h-screen lg:flex-row justify-between items-center lg:pl-[72px] mb-6 max-lg:mt-24 max-lg:justify-end gap-5`}
      id="home"
    >
      <div className="w-full px-[25px] lg:px-0 lg:w-[630px] xl:w-[710px] flex flex-col gap-4 mb-8 lg:mb-0 text-start xl:text-start">
        <p className="text-black font-nunito-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[35px] md:leading-[35px] lg:leading-[45px] xl:leading-[65px]">
          Spread Kindness,
          <br />
          Green the Earth Together
        </p>
        <p className="font-nunito text-sm md:text-base leading-[18px] md:leading-[21.82px] text-gray-400">
          Find simple ways to plant for a greener Earth.
          <br />
          Join{" "}
          <span className="font-nunito-bold text-emerald-500">
            Plantopia
          </span>{" "}
          now and green the planet together!
        </p>
        <div className="flex sm:flex-row gap-4 justify-start xl:justify-start">
          <Image
            src={IconsImport.IconsGooglePlay}
            alt="Google Play Icon"
            className="w-[110px] lg:w-[110px] xl:w-[144px]"
          />
          <button className="lg:p-3 xl:p-[14px] font-nunito-bold text-sm md:text-base leading-6 text-emerald-500">
            Learn More
          </button>
        </div>
      </div>
      <div
        className="w-full lg:w-[670px] xl:w-[652px] h-[300px] sm:h-[400px] md:h-[430px] lg:h-[550px] xl:h-[662px] bg-emerald-50 
                flex items-center justify-center lg:rounded-bl-[50px] lg:justify-end lg:pr-[80px] 
                xl:justify-end mr-0 xl:pr-[80px] order-1 lg:order-last mb-4 md:mb-5 lg:mb-0 xl:mb-0"
      >
        <Image
          src={ImageImport.ImageHero}
          alt="Hero Image"
          className="w-[260px] sm:w-[350px] xl:w-[493px] transform transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}
