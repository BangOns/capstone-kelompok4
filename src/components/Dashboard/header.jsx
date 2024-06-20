"use client";

import { useEffect, useState } from "react";
import Label_header from "./Component_Header/label_header";
import Notifications from "./Component_Header/Notifications";
import Profile_header from "./Component_Header/Profile_header";

export default function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const token = getCookie("token");
        if (!token) {
          throw new Error("Token not found in cookies");
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch admin profile");
        }
        setUserName(data.data.name.split(" ")[0]);
      } catch (error) {
        console.error("Error fetching admin profile:", error.message);
      }
    };

    fetchAdminProfile();
  }, []);

  const getCookie = (name) => {
    const cookieValue = document.cookie.match(
      "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    );
    return cookieValue ? cookieValue.pop() : "";
  };

  return (
    <header className="z-10">
      <div className="flex justify-between items-center py-[16px]">
        <div>
          <Label_header
            className={"text-[16px] font-nunito text-neutral-500 "}
          />
        </div>
        <div className="flex justify-end  ">
          <Profile_header name={userName} />
        </div>
      </div>
    </header>
  );
}
