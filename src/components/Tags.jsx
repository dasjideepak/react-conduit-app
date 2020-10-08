import React from "react";
import useFetch from "./hooks/useFetch";
import { v4 as uuid } from "uuid";

export default function Tags() {
  const URL_TO_FETCH_TAGS = "https://mighty-oasis-08080.herokuapp.com/api/tags";
  const { data, error, isLoading } = useFetch(URL_TO_FETCH_TAGS);

  if (isLoading) {
    return (
      <div className="tags-sec justify-between">
        <div className="tags-container">
          <h1>Loading</h1>;
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tags-sec justify-between">
        <div className="tags-container">
          <h1>Error...</h1>;
        </div>
      </div>
    );
  }

  if (data) {
    return (
      <div className="tags-sec justify-between">
        <div className="tags-container">
          {data.tags.map((tag) => (
            <a href="##" key={uuid()}>
              <div className="tag">
                <h1>{tag}</h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="tags-sec justify-between">
      <div className="tags-container">
        <h1>Loading</h1>;
      </div>
    </div>
  );
}
