import NavbarLanding from "../../components/Landing/navbar";
import Footer from "../../components/Landing/foot";
import React from "react";
export default function layout({ children }) {
  return (
    <div>
      <NavbarLanding />
      {children}
      <Footer />
    </div>
  );
}
