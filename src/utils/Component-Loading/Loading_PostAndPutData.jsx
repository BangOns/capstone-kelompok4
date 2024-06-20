import React from "react";

export default function Loading_PostAndPutData() {
  return (
    <div className="w-screen h-screen z-10 fixed ">
      <div className="w-3/4 h-full grid place-items-center">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
