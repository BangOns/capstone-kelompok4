"use client";
import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function InputPlantCaring(){
    const [content, setContent] = useState('');
    
    return(
        <section className="ml-[259px] border rounded-md border-neutral-200 p-4 mr-5">
            <div className="flex flex-row gap-2 mb-6 items-center">
                <p className="text-xl font-nunito-bold">Additional Planting Instructions Tips </p>
                <p className="font-nuniyo-italic text-slate-500"> (if necessary) </p>
            </div>
            <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
            />
        </section>
    )
}