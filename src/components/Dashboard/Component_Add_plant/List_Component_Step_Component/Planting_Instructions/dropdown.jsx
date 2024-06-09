"use client";
import { useState } from "react";
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";

export default function DropdownSearch({ items, onButtonClick, setCategory }) {
  const [searchTerm, setSearchTerm] = useState("Fruits");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="text-left text-[16px] font-[400] flex w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {searchTerm}{" "}
          <Image
            className="ml-auto"
            src={IconsImport.IconsDropdown}
            alt="image"
          />
        </button>
      </div>

      {isOpen && (
        <div className="w-full absolute right-0 z-10 mt-2  origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="max-h-60 overflow-auto">
            <button
              onClick={() => {
                setSearchTerm("Fruits");
                setIsOpen(false);
                setCategory("Fruits");
              }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Fruits
            </button>
            <button
              onClick={() => {
                setSearchTerm("Angiosperms");
                setIsOpen(false);
                setCategory("Angiosperms");
              }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Angiosperms
            </button>
          </div>
          <div className="py-2">
            <button
              onClick={onButtonClick}
              className="w-full text-left flex items-center justify-start  px-4 py-2 text-sm text-[#0EA5E9] rounded-md"
            >
              <span className="text-[30px] mr-2 my-auto">+ </span>{" "}
              <span className="mt-1 my-auto">Add other category</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
