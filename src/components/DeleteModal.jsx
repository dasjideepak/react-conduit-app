import React from "react";
import { useParams } from "react-router-dom";

export default function DeleteModal(props) {
  const params = useParams();
  console.log(params);

  function handleArticleDelete() {
    console.log("Hi");
  }

  return (
    <section className="antialiased bg-gray-100 text-gray-900 font-sans overflow-x-hidden fixed top-0 left-0 right-0 opacity-100">
      <div className="px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className="bg-black w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative opacity-100">
          <div className="md:flex items-center">
            <div className="rounded-full border border-red-700 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
              <svg
                className="w-8 h-8 text-red-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="font-bold">Delete this Article</p>
              <p className="text-sm text-gray-700 mt-1">
                Click on delete button if you want to delete this article. This
                action cannot be undone.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              onClick={() => handleArticleDelete()}
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
            >
              Delete
            </button>
            <button
              onClick={() => props.setIsDeleteModalVisibile(false)}
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
