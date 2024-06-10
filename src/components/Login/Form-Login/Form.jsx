"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";
import { useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://be-agriculture-awh2j5ffyq-uc.a.run.app/api/v1/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      router.push("/dashboard");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="form mt-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 mb-6">
          <p className="font-nunito-bold text-sm leading-[19px]">Email</p>
          <label className="input input-bordered border-black flex items-center gap-2">
            <Image src={IconsImport.IconsEmail} alt="Email Icon" />
            <input
              type="email"
              className="grow"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={togglePasswordVisibility} className="cursor-pointer">
              <Image
                src={
                  showPassword
                    ? IconsImport.IconsUnseePassword
                    : IconsImport.IconsSeePassword
                }
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
            <span className="font-nunito text-sm leading-[22px]">
              Remember me
            </span>
          </label>
          <button className="font-nunito-bold text-xs text-sky-500 leading-4 ml-auto">
            Forgot Password?
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          type="submit"
          className="bg-emerald-500 w-full rounded-lg mt-6 p-[14px] font-nunito-bold text-base leading-6 text-white"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}
