import React from "react";
import { useFetch } from "./hooks/handleFetch";
import { v4 as uuid } from "uuid";

export default function Tags() {
  const URL_TO_FETCH_TAGS = "https://mighty-oasis-08080.herokuapp.com/api/tags";
  const { data, error, isLoading } = useFetch(URL_TO_FETCH_TAGS);

  if (isLoading) {
    return (
      <div className="tags-sec justify-between">
        <div className="tags-container">
          <h1>Loading</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tags-sec justify-between">
        <div className="tags-container">
          <h1>Error...</h1>
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="pb-12">
        <div className="container">
          <div className="px-4 flex flex-wrap text-center">
            {data.tags.map((tag) => (
              <a
                href="##"
                key={uuid()}
                className="m-1 py-2 pl-1 pr-3 bg-gray-200 rounded-full flex items-center"
              >
                <svg width="30" height="24" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="15" fill="#1E1B1D"></circle>
                  <path
                    d="M10.78 21h1.73l.73-3.2h2.24l-.74 3.2h1.76l.72-3.2h3.3v-1.6H17.6l.54-2.4H21v-1.6h-2.5l.72-3.2h-1.73l-.73 3.2h-2.24l.74-3.2H13.5l-.73 3.2H9.5v1.6h2.93l-.56 2.4H9v1.6h2.52l-.74 3.2zm2.83-4.8l.54-2.4h2.24l-.54 2.4H13.6z"
                    fill="#fff"
                  ></path>
                </svg>
                <span className="pl-1">{tag}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tags-sec justify-between">
      <div className="tags-container">
        <h1>Loading</h1>
      </div>
    </div>
  );
}
