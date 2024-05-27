'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Answer({ name }) {
  const [value, setValue] = useState('');

  return (
    <div className="w-[439.5px] h-[215px]">
      <div className="text-[#030712] font-nunito-bold mb-2 text-[14px]">
        {name}
      </div>
      <div className="w-[439.5px] h-[188px]" >
        <ReactQuill
          className="w-full h-[148px] text-neutral-950 text-left text-[14px]"
          value={value}
          onChange={setValue}
          placeholder={`${name}...`}
          style={{border: 'none !important'}}
        />
      </div>
    </div>
  );
}
