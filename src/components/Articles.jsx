import React from "react";
import { useFetch } from "./hooks/handleFetch";
import { v4 as uuid } from "uuid";
import LoaderPage from "./LoaderPage";

export default function Articles() {
  const URL_TO_FETCH_ARTICLES =
    "https://mighty-oasis-08080.herokuapp.com/api/articles?limit=10&offset=0";
  const { data, error, isLoading } = useFetch(URL_TO_FETCH_ARTICLES);

  if (data) {
    return (
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container p-4 mx-auto">
          <div className="flex flex-wrap justify-between">
            {data.articles.map((article) => (
              <div
                className="px-12 py-8 md:w-full flex flex-col items-start mb-16 rounded-lg"
                key={uuid()}
                style={{
                  width: "45%",
                  boxShadow:
                    "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
                }}
              >
                <span className="inline-block py-1 px-3 rounded bg-pink-100 text-indigo-700 text-sm font-medium tracking-widest">
                  {article.tagList[0]}
                </span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  {article.title}
                </h2>
                {article.description.length > 200 ? (
                  <p className="leading-relaxed mb-8">{`${article.description.substring(
                    0,
                    200
                  )}...`}</p>
                ) : (
                  <p className="leading-relaxed mb-8">{article.description}</p>
                )}
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
                  <a
                    href="##"
                    className="text-indigo-700 font-bold inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3">
                    <p>{article.createdAt}</p>
                  </span>
                </div>
                <a href="##" className="inline-flex items-center">
                  <img
                    alt={article.author.username + " avatar"}
                    src={article.author.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {article.author.username}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {article.author.bio}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  if (isLoading) {
    return <LoaderPage />;
  }

  return <LoaderPage />;
}
