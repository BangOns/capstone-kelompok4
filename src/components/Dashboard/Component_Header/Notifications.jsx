"use client";
import Link from "next/link";
import { useState } from "react";
import IconsNotifications from "@/utils/Component-Icons-Header/IconsNotifications";

export default function Notifications({ className }) {
  const [linkHover, linkHoverSet] = useState("");
  return (
    <div className={className}>
      <Link
        href="#"
        className="flex gap-2 items-start"
        onMouseMove={() => linkHoverSet("notifications")}
        onMouseLeave={() => linkHoverSet("")}
      >
        <IconsNotifications active={linkHover.includes("notifications")} />
      </Link>
    </div>
  );
}
