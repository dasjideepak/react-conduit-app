import Loader from "react-loader-spinner";
import React from "react";

export default function LoaderPage() {
  return (
    <div className="justify-center items-center loader-container">
      <Loader type="Ball-Triangle" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
