import React from "react";
import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";

export default function NavbarLanding({ refNavbar }) {
  return (
    <div
      ref={refNavbar}
      className="flex fixed w-full z-30 bg-white flex-row justify-between items-center px-[25px] lg:px-[72px] "
    >
      <div className="flex flex-row justify-start items-center pt-[7px] pb-[7.87px] my-[6px] gap-[10px]">
        <Image
          src={IconsImport.IconsLogoPlantopia}
          alt="image plants"
          className="w-[54.804px] h-[70.13px]"
        />
        <p className="font-nunito-bold text-[26.571px] text-emerald-500">
          Plantopia
        </p>
      </div>
      <div className="hidden lg:flex flex-row justify-end items-center gap-[58px]">
        <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
          Home
        </button>
        <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
          Features
        </button>
        <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
          About us
        </button>
        <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
          FAQ
        </button>
      </div>
      <div className="lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  p-2 shadow bg-base-100 rounded-box w-36 right-4"
          >
            <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
              Home
            </button>
            <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
              Features
            </button>
            <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
              About us
            </button>
            <button className="font-nunito-bold text-base leading-[22px] text-black hover:text-emerald-600">
              FAQ
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
