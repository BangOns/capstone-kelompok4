"use client"

import React, { useState } from "react";
import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";

export default function Form() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="form mt-10">
            <form>
                <div className="flex flex-col gap-1 mb-6">
                    <p className="font-nunito-bold text-sm leading-[19px]">Email</p>
                    <label className="input input-bordered border-black flex items-center gap-2">
                        <Image src={IconsImport.IconsEmail} alt="Email Icon" />
                        <input type="email" className="grow" placeholder="example@mail.com" />
                    </label>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-nunito-bold text-sm leading-[19px]">Password</p>
                    <label className="input input-bordered border-black flex items-center gap-2">
                        <Image src={IconsImport.IconsPassword} alt="Password Icon" />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="grow" 
                            placeholder="********" 
                        />
                        <span onClick={togglePasswordVisibility} className="cursor-pointer">
                            <Image 
                                src={showPassword ? IconsImport.IconsUnseePassword : IconsImport.IconsSeePassword} 
                                alt={showPassword ? "Hide Password" : "Show Password"} 
                            />
                        </span>
                    </label>
                </div>
                <div className="flex justify-between items-center">
                    <label className="cursor-pointer label gap-2 py-1 px-2 my-[6.5px] flex items-center">
                        <input 
                            type="checkbox" 
                            id="checkbox" 
                            className="checkbox-custom peer relative h-[15px] w-[15px] shrink-0 appearance-none rounded-sm
                            border focus:outline-none hover:ring hover:ring-emerald-500" 
                        />
                        <span className="font-nunito text-sm leading-[22px]">Remember me</span>
                    </label>
                    <button className="font-nunito-bold text-xs text-sky-500 leading-4 ml-auto">
                        Forgot Password?
                    </button>
                </div>
                <button type="submit" className="bg-emerald-500 w-full rounded-lg mt-6 p-[14px] font-nunito-bold text-base leading-6 text-white">Log In</button>
            </form>
        </div>
    );
}
