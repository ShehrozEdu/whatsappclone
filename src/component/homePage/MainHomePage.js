import React from "react";
import HomePage from "./HomePage";

export default function MainHomePage() {
  return (
    <>
      <div className="">
        <div className="theme-green py-5 "></div>
        <div className="d-flex  justify-content-center">
          <div className="position-absolute top-0 mt-3 homepage shadow">
            <HomePage />
          </div>
        </div>
      </div>
    </>
  );
}
