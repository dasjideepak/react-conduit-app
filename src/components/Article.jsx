import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ROOT_URL } from "../constants";
import { useFetch } from "./hooks/handleFetch";
import { v4 as uuid } from "uuid";
import AddComment from "./AddComment";
import Loader from "react-loader-spinner";
import Comments from "./Comments";

export default function Article(props) {
  const params = useParams();

  const { data, error, isLoading } = useFetch(
    ROOT_URL + `articles/${params.slug}`
  );

  if (data) {
    return (
      <section className="container">
        <div className="p-4 w-full h-full bg-gray-200 px-12 pt-16 pb-16 rounded-lg overflow-hidden relative my-16">
          {data.article.tagList.map((tag) => {
            return (
              <h2
                key={uuid()}
                className="text-center tracking-widest text-xs title-font font-medium text-gray-700 mb-1"
              >
                {tag}
              </h2>
            );
          })}
          <h1 className="text-center title-font sm:text-3xl text-3xl font-medium text-gray-700 font-bold py-4">
            {data.article.title}
          </h1>
          <p className="leading-relaxed mb-3">{data.article.body}</p>
          <div className="flex justify-between mt-8">
            <div>
              <NavLink to="##" className="inline-flex items-center">
                <img
                  alt={`${data.article.author.username}-img`}
                  src={data.article.author.image}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-2"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    {data.article.author.username}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {data.article.author.following ? "Unfollow" : "Follow"}
                  </span>
                </span>
              </NavLink>
            </div>
            <div className="text-center mt-2 leading-none flex justify-center">
              <button
                onClick={() => props.setIsDeleteModalVisibile(true)}
                className="text-red-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
                Delete Article
              </button>
              <NavLink
                to={`/articles/${data.article.slug}`}
                className="text-blue-800 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
                Update Article
              </NavLink>
              <NavLink
                to="/"
                className="text-blue-800 inline-flex items-center leading-none text-sm"
              >
                <svg
                  className={`${
                    data.article.favorited ? "text-red-500" : false
                  } w-8 h-6 `}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {data.article.favoritesCount}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex my-12 w-full">
          <div className="w-1/2">
            <AddComment />
          </div>
          <div className="w-1/2">
            <Comments />
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return <ArticleLoader />;
  }

  if (error) {
    return <ArticleLoader />;
  }

  return <ArticleLoader />;
}

function ArticleLoader() {
  return (
    <section className="container">
      <div className="p-4 w-full h-full bg-gray-200 px-12 pt-16 pb-16 rounded-lg overflow-hidden relative my-16 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader type="Oval" color="#00BFFF" height={40} width={40} />
          <h1 className="py-2">Loading Article...</h1>
        </div>
      </div>
    </section>
  );
}
