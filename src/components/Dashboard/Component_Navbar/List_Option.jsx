// Roni
"use client";
import IconsMinimize from "@/utils/Component-Icons-Navbar/IconsMinimize";
import IconsMaximize from "@/utils/Component-Icons-Navbar/IconsMaximize";
import IconsSettings from "@/utils/Component-Icons-Navbar/IconsSettings";
import IconsSignOut from "@/utils/Component-Icons-Navbar/IconsSignOut";
import React, { useState } from "react";
// Almas
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function List_Option({ isMinimized, toggleMinimize }) {
  const router = useRouter();
  const [linkHover, linkHoverSet] = useState("");

  return (
    <ul>
      <li className="p-4">
        <button
          className="w-full flex gap-2 items-start"
          onClick={toggleMinimize}
          onMouseMove={() => linkHoverSet("minimize")}
          onMouseLeave={() => linkHoverSet("")}
        >
          {isMinimized ? (
            <IconsMaximize active={linkHover.includes("minimize")} />
          ) : (
            <IconsMinimize active={linkHover.includes("minimize")} />
          )}
          {!isMinimized && (
            <p
              className={`text-base font-nunito transition duration-300 ${
                linkHover.includes("minimize")
                  ? "text-emerald-500 font-nunito-bold"
                  : "text-gray-400 font-nunito"
              }`}
            >
              Minimize
            </p>
          )}
        </button>
      </li>
      <li className="p-4">
        <button
          className="w-full flex gap-2 items-start"
          onMouseMove={() => linkHoverSet("settings")}
          onMouseLeave={() => linkHoverSet("")}
        >
          <IconsSettings active={linkHover.includes("settings")} />
          {!isMinimized && (
            <p
              className={`text-base font-nunito transition duration-300 ${
                linkHover.includes("settings")
                  ? "text-emerald-500 font-nunito-bold"
                  : "text-gray-400 font-nunito"
              }`}
            >
              Settings
            </p>
          )}
        </button>
      </li>
      <li className="p-4">
        <button
          className="w-full flex gap-2 items-start"
          onMouseMove={() => linkHoverSet("signout")}
          onMouseLeave={() => linkHoverSet("")}
          onClick={() => {
            Cookies.remove("token", { path: "/" });
            router.push("/");
          }}
        >
          <IconsSignOut active={linkHover.includes("signout")} />
          {!isMinimized && (
            <p
              className={`text-base font-nunito transition duration-300 ${
                linkHover.includes("signout")
                  ? "text-red-500 font-nunito-bold"
                  : "text-gray-400 font-nunito"
              }`}
            >
              Sign Out
            </p>
          )}
        </button>
      </li>
    </ul>
  );
}
