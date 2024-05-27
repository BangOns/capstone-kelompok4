"use client"

import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Plant_Caring() {
    const [value, setValue] = useState('');
    
    return (
        <div>
            <div className="border rounded-md border-neutral-200 p-4">
                <div className="flex flex-row gap-2 mb-6 items-center">
                    <p className="text-xl font-nunito-bold">Additional Planting Instructions Tips </p>
                    <p className="font-nunito-light text-slate-500"> (if necessary) </p>
                </div>
                <ReactQuill
                    className="w-full h-[249px] border border-neutral-400 flex-col-reverse flex overflow-hidden rounded"
                    theme="snow"
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    )
}
