import React from "react";
import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import HeaderForm from "./Form-Login/Header-Form";
import Form from "./Form-Login/Form";

export default function Login() {
    return (  
        <div className="flex flex-row justify-start items-center">
            <Image src={ImageImport.ImageMockup} alt="image mockup" />
            <div className=" px-10">
                <HeaderForm />
                <Form />
            </div>
        </div>
    );
}
