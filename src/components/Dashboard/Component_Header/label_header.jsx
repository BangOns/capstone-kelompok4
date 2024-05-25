"use client";
import { usePathname } from "next/navigation";
export default function Label_header({ className }) {
  const pathname = usePathname();
  const formatString = () => {
    let formattedString = pathname.startsWith("/")
      ? pathname.slice(1)
      : pathname;
    formattedString = formattedString.replace(/-/g, " ");
    formattedString = formattedString.replace(/\//g, " / ");
    formattedString = formattedString.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });

    return formattedString;
  };
  return <p className={className}>{formatString()}</p>;
}
