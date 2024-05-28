import Image from "next/image";
import { ImageImport } from "@/utils/ImageImport";
export default function Profile_header({ name }) {
  return (
    <div className="flex gap-3 px-4">
      <Image src={ImageImport.ImageProfile} alt="profile" />
      <p className=" text-neutral-950">{name}</p>
    </div>
  );
}
