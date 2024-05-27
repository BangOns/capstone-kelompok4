// Roni
"use client";

import IconsHome from "@/utils/Component-Icons-Navbar/IconsHome";
import IconsManagePlants from "@/utils/Component-Icons-Navbar/IconsManagePlants";
import IconsNotifications from "@/utils/Component-Icons-Navbar/IconsNotifications";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function List_Link_Page() {
  const pathname = usePathname().split("/");
  const [linkHover, linkHoverSet] = useState("");
  return (
    <ul className="pt-2 ">
      <li className="p-4">
        <Link
          href={"/dashboard"}
          className="flex gap-2 items-start"
          onMouseMove={() => linkHoverSet("dashboard")}
          onMouseLeave={() => linkHoverSet("")}
        >
          <IconsHome
            active={
              pathname[pathname.length - 1].includes("dashboard") ||
              linkHover.includes("dashboard")
            }
          />
          <p
            className={`text-base font-nunito ${
              pathname[pathname.length - 1]?.includes("dashboard") ||
              linkHover.includes("dashboard")
                ? "text-emerald-500 font-nunito-bold"
                : "text-gray-400 font-nunito"
            }`}
          >
            Home
          </p>
        </Link>
      </li>
      <li className="p-4">
        <Link
          href={"/dashboard/manage-plant"}
          className="flex gap-2 items-start"
          onMouseMove={() => linkHoverSet("manage-plant")}
          onMouseLeave={() => linkHoverSet("")}
        >
          <IconsManagePlants
            active={
              pathname[2]?.includes("manage-plant") ||
              linkHover.includes("manage-plant")
            }
          />
          <p
            className={`text-base font-nunito ${
              pathname[2]?.includes("manage-plant") ||
              linkHover.includes("manage-plant")
                ? "text-emerald-500 font-nunito-bold"
                : "text-gray-400 font-nunito"
            }`}
          >
            Manage Plant
          </p>
        </Link>
      </li>
      <li className="p-4">
        <Link
          href="#"
          className="flex gap-2 items-start"
          onMouseMove={() => linkHoverSet("notifications")}
          onMouseLeave={() => linkHoverSet("")}
        >
          <IconsNotifications
            active={
              pathname[2]?.includes("notifications") ||
              linkHover.includes("notifications")
            }
          />

          <p
            className={`text-base font-nunito ${
              pathname[pathname.length - 1]?.includes("notifications") ||
              linkHover.includes("notifications")
                ? "text-emerald-500 font-nunito-bold"
                : "text-gray-400 font-nunito"
            }`}
          >
            Notifications
          </p>
        </Link>
      </li>
    </ul>
  );
}
