import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
export default function Profile_header({ name }) {
  return (
    <div className="flex px-[16px]">
      <p className="pr-[16px] text-neutral-950">{name}</p>
      <Image src={ImageImport.ImageProfile} alt="profile" />
    </div>
  );
}
