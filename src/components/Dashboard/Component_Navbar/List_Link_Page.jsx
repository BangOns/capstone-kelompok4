"use client";
import IconsHome from "@/utils/Component-Icons-Navbar/IconsHome";
import IconsManagePlants from "@/utils/Component-Icons-Navbar/IconsManagePlants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function List_Link_Page({ isMinimized }) {
  const pathname = usePathname().split("/");
  const [linkHover, linkHoverSet] = useState("");

  return (
    <ul className="pt-2">
      <li className="p-4">
        <Link
          href={"/dashboard"}
          className="flex gap-2 items-center"
          onMouseEnter={() => linkHoverSet("dashboard")}
          onMouseLeave={() => linkHoverSet("")}
        >
          <IconsHome
            active={
              pathname[pathname.length - 1].includes("dashboard") ||
              linkHover.includes("dashboard")
            }
          />
          {!isMinimized && (
            <p
              className={`transition duration-300 text-base font-nunito ${
                pathname[pathname.length - 1]?.includes("dashboard") ||
                linkHover.includes("dashboard")
                  ? "text-emerald-500 font-nunito-bold"
                  : "text-gray-400 font-nunito"
              }`}
            >
              Home
            </p>
          )}
        </Link>
      </li>
      <li className="p-4">
        <Link
          href={"/dashboard/manage-plant"}
          className="flex gap-2 items-center"
          onMouseEnter={() => linkHoverSet("manage-plant")}
          onMouseLeave={() => linkHoverSet("")}
        >
          <IconsManagePlants
            active={
              pathname[2]?.includes("manage-plant") ||
              linkHover.includes("manage-plant")
            }
          />
          {!isMinimized && (
            <p
              className={`transition duration-300 text-base font-nunito ${
                pathname[2]?.includes("manage-plant") ||
                linkHover.includes("manage-plant")
                  ? "text-emerald-500 font-nunito-bold"
                  : "text-gray-400 font-nunito"
              }`}
            >
              Manage Plant
            </p>
          )}
        </Link>
      </li>
    </ul>
  );
}
