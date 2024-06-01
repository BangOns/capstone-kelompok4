import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import "react-quill/dist/quill.snow.css";
import { ReduxProvider } from "@/libs/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plantopia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/_next/static/media/Icons-Logo-Plantopia.a8d56328.svg"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
