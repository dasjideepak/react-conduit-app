import React from "react";

export default function Notification(props) {
  return (
    <div className="flex justify-between flex-col">
      <div
        className="text-white p-8 w-full"
        style={{ position: "fixed", bottom: "80px" }}
      >
        <div
          className={
            "border px-4 py-3 rounded relative rounded-full " +
            (props.type === "error"
              ? "bg-red-100 border-red-400 text-red-700 "
              : "bg-green-100 border-green-400 text-green-700 ")
          }
          role="alert"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <div>
            <strong className="font-bold">
              {props.type === "error" ? "Error!" : "Success!"}
            </strong>
            <span className="block sm:inline px-4">{props.message}</span>
          </div>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className={
                "fill-current h-6 w-6" +
                (props.type === "error" ? "text-red-500  " : "text-green-500  ")
              }
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
