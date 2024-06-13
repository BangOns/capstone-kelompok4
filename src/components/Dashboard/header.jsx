"use client"

import { useEffect, useState } from 'react';
import Label_header from "./Component_Header/label_header";
import Notifications from "./Component_Header/Notifications";
import Profile_header from "./Component_Header/Profile_header";

export default function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userEmail = 'octavianoryan123@gmail.com';

    fetch(`https://be-agriculture-awh2j5ffyq-uc.a.run.app/api/v1/admin?email=${userEmail}`)
      .then(response => response.json())
      .then(data => {
        const fullName = data.name;
        const firstName = fullName.split(" ")[0];
        setUserName(firstName);
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
  }, []); 

  return (
    <header className="z-10">
      <div className="flex justify-between items-center py-[16px]">
        <div>
          <Label_header
            className={"text-[16px] font-nunito text-neutral-500 "}
          />
        </div>
        <div className="flex justify-end  ">
          <Notifications className={"px-4"} />
          <Profile_header name={userName} />
        </div>
      </div>
    </header>
  );
}
