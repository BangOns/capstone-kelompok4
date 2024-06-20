import Login from "@/components/Login/Login";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function pageLogin() {
  return (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
}
