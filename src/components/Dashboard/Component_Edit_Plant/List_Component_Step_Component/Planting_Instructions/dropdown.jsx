"use client";
import { useState, useEffect } from "react";
import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function DropdownSearch({ setCategory, dataEdit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [allIsntructionsCategories, allIsntructionsCategoriesSet] = useState(
    []
  );
  const FindInstructionsCategoriesById =
    allIsntructionsCategories.length !== 0 &&
    dataEdit.hasOwnProperty("instruction_category")
      ? allIsntructionsCategories.find(
          (items) => items.id === dataEdit.instruction_category?.id
        )
      : dataEdit.hasOwnProperty("instruction_category_id") &&
        allIsntructionsCategories.find(
          (items) => items.id === dataEdit.instruction_category_id
        );
  useEffect(() => {
    if (FindInstructionsCategoriesById) {
      setSearchTerm(FindInstructionsCategoriesById.name);
    } else {
      setSearchTerm("");
    }
  }, [FindInstructionsCategoriesById]);
  async function getInstructionsCategories() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants/instructions/categories`,
        {
          method: "GET",
        }
      );
      const allResponse = await response.json();
      allIsntructionsCategoriesSet(allResponse.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getInstructionsCategories();
  }, []);

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="text-left text-[16px] font-[400] flex w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {searchTerm ? searchTerm : "Choose Spell Category"}{" "}
          <Image
            className="ml-auto"
            src={IconsImport.IconsDropdown}
            alt="image"
          />
        </button>
      </div>

      {isOpen && (
        <div className="w-full absolute right-0 z-10 mt-2  origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="max-h-60 overflow-auto">
            {allIsntructionsCategories ? (
              allIsntructionsCategories.map((items, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSearchTerm(items.name);
                    setIsOpen(false);
                    setCategory(items.id);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  {items.name}
                </button>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
