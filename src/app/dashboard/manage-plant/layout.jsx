import React from "react";
import Header from "@/components/Dashboard/header";
export default function layout({ children }) {
  return (
    <main className="xl:ml-56 max-xl:ml-20">
      <article className="pl-5 pr-10 bg-white h-full min-h-screen">
        <Header />
        {children}
      </article>
    </main>
  );
}
