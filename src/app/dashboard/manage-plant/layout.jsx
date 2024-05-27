import React from "react";

export default function layout({ children }) {
  return (
    <main className="ml-56">
      <article className="pl-5 pr-10">
        {/* Header disini */}

        {children}
      </article>
    </main>
  );
}
