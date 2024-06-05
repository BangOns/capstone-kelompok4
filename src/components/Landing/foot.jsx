import Link from "next/link";
import Image from "next/image";
import { IconsImport } from "@/utils/IconsImport";
import { ImageImport } from "../../utils/ImageImport";
import FooterComponent from "./Footer/page";

export default function Footer() {
  return (
    <div className="bg-emerald-500 mt-8  text-center">
      <FooterComponent />
    </div>
  );
}