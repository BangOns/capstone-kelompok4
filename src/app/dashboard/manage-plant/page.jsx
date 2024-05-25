import { IconsImport } from "@/utils/IconsImport";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="w-full pt-2">
      <header className="">
        <h1 className="text-[28px] font-nunito-bold pb-6">Manage Plant</h1>
        <div className="flex justify-between">
          <div className="w-[286px] border rounded-lg flex items-center px-[14px] py-3 gap-2">
            <Image src={IconsImport.IconsSearch} alt="search" />
            <input
              type="text"
              placeholder="Search Plants..."
              className="w-full border-0 focus:ring-0 outline-none text-sm font-poppins"
            />
          </div>
          <button className="rounded-[14px] bg-emerald-500 text-white font-nunito-bold p-[14px] flex items-center gap-4">
            <Image src={IconsImport.IconsAddPlant} alt="add plant" />
            <p>Add New Plant</p>
          </button>
        </div>
      </header>
      <article className="w-full pt-[28.5px] ">
        <div className="overflow-x-auto rounded-s-2xl rounded-e-2xl">
          <table className="table ">
            {/* head */}
            <thead className="bg-base-200 ">
              <tr className="font-nunito-bold text-black">
                <th>Image</th>
                <th>Plant Name</th>
                <th>Added Date</th>
                <th>Category</th>
                <th>Wathering Schedule</th>
                <th>Harvest Duration</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}
