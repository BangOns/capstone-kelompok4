import Image from "next/image";
import { ImageImport } from "../../../utils/ImageImport";
export default function Mitra() {
  return (
    <div className="w-full text-center my-32">
      <p className="py-5 font-[700] text-[16px] text-[#030712] font-nunito-bold">
        Our Partners :
      </p>
      <Image
        src={ImageImport.Imagemitra}
        width={572}
        height={66}
        alt="mitra"
        className="m-auto"
      ></Image>
    </div>
  );
}
