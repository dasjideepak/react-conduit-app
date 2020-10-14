import React from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

export default function Notifications(props) {
  const { notifications } = props;

  return notifications.length ? (
    <>
      <div className="flex justify-between flex-col">
        <div
          className="text-white p-8 w-full"
          style={{ position: "fixed", bottom: "80px" }}
        >
          {notifications.length &&
            notifications?.map((notification) => {
              return (
                <div
                  key={uuid()}
                  className={
                    "border px-4 py-3 rounded relative rounded-full " +
                    (notification.type === "error"
                      ? "bg-red-100 border-red-400 text-red-700 "
                      : "bg-green-100 border-green-400 text-green-700 ")
                  }
                  role="alert"
                  style={{ maxWidth: "600px", margin: "12px auto" }}
                >
                  <div>
                    <strong className="font-bold">
                      {notification.type === "error" ? "Error!" : "Success!"}
                    </strong>
                    <span className="block sm:inline px-4">
                      {notification.message}
                    </span>
                  </div>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                      className={
                        "fill-current h-6 w-6 " +
                        (notification.type === "error"
                          ? "text-red-500"
                          : "text-green-500")
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
              );
            })}
        </div>
      </div>
    </>
  ) : (
    false
  );
}

Notifications.propTypes = {
  notifications: PropTypes.array,
};
