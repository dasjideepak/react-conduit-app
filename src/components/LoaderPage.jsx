import Loader from "react-loader-spinner";
import React from "react";

export default function LoaderPage() {
  return (
    <div className="h-screen w-width bg-gray-800 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-50">
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
