import React from "react";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import HeaderForm from "./Form-Login/Header-Form";
import Form from "./Form-Login/Form";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-row justify-between gap-10 items-center pr-10 overflow-hidden">
      <figure className="w-full basis-1/2">
        <Image
          src={ImageImport.ImageMockup}
          alt="image mockup"
          className="w-full object-contain"
          width={640}
        />
      </figure>
      <div className=" w-full basis-1/2 px-10">
        <HeaderForm />
        <Form />
      </div>
    </div>
  );
}
