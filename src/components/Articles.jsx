import React from "react";
import { useFetch } from "./hooks/handleFetch";
import { v4 as uuid } from "uuid";
import LoaderPage from "./LoaderPage";

export default function Articles() {
  const URL_TO_FETCH_ARTICLES =
    "https://mighty-oasis-08080.herokuapp.com/api/articles?limit=10&offset=0";
  const { data, error, isLoading } = useFetch(URL_TO_FETCH_ARTICLES);

  if (data) {
    // console.log(data.articles);
    return (
      <main className="articles-sec padding">
        {data.articles.map((article) => (
          <div className="card" key={uuid()}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                  alt="Placeholder img"
                />
              </figure>
            </div>
            <div className="card-content">
              <p className="card-title">{article.title}</p>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-24x24">
                    <img src={article.author.image} alt="user avatar" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{article.author.username}</p>
                </div>
              </div>

              <div className="content">
                <p>{article.description}</p>
                <time className="date-time" dateTime="2016-1-1">
                  {article.createdAt}
                </time>
              </div>
            </div>
            <div className="tags-container">
              {article.tagList.map((tag) => (
                <span key={uuid()}>{tag}</span>
              ))}
            </div>
            <div className="button-container">
              <button className="button is-link">Read More</button>
            </div>
          </div>
        ))}
      </main>
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
