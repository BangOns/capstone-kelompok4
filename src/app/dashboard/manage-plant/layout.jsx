import React from "react";
import Header from "@/components/Dashboard/header";
export default function layout({ children }) {
  return (
    <main className="ml-56">
      <article className="pl-5 pr-10">
        <Header />
        {children}
      </article>
    </main>
  );
}
