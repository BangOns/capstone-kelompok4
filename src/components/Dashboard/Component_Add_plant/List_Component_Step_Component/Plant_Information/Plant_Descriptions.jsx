import dynamic from "next/dynamic";
import React from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Plant_Descriptions({ value, setValue }) {
  return (
    <section className="basis-1/2 h-full">
      <header className="pb-2">
        <h1 className="font-nunito-bold text-sm">
          Plant Description<span className="text-red-500">*</span>
        </h1>
      </header>
      <article className="w-full border border-neutral-400 rounded-lg ">
        <ReactQuill
          className="w-full h-[180px]  flex-col-reverse flex  font-nunito z-10 "
          theme="snow"
          value={value}
          placeholder="Description..."
          onChange={setValue}
        />
      </article>
    </section>
  );
}
