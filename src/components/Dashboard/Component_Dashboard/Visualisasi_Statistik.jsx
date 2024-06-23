import React, { Suspense } from "react";

export default function Visualisasi_Statistik() {
  return (
    <>
      <Suspense>
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/4df32514-834a-4158-97d0-0d7c198dcf73/page/p_zv78knrhid"
          allowFullScreen
          height={700}
          className="w-full h-screen custom-scrollbar"
        />
      </Suspense>
    </>
  );
}
