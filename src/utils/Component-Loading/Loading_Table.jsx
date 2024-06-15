import React from "react";
import { IconsImport } from "../IconsImport";
import Image from "next/image";

export default function Loading_Table() {
  return (
    <tr className="text-center">
      <td className="flex justify-center">
        <figure className="w-[60px] h-[60px] rounded-xl border flex items-end justify-center bg-gray-200 overflow-hidden bg-gradient-to-b from-50% from-white to-gray-200/60"></figure>
      </td>
      <td>
        <div className="text-center">
          <h4 className="text-base font-nunito-bold">...</h4>
          <p className="text-sm font-nunito italic">...</p>
        </div>
      </td>
      <td>...</td>
      <td>...</td>
      <td>
        <p>...</p>
        <p> ...</p>
      </td>
      <td>
        <p>...</p>
      </td>
      <td className="relative">
        <Image
          src={IconsImport.IconsMenuTable}
          alt="menu"
          className="hover:cursor-pointer"
        />
      </td>
    </tr>
  );
}
