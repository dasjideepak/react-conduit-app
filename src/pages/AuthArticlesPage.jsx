import React from "react";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import YourFeed from "../components/YourFeed";
import { useState } from "react";

export default function AuthArticlesPage() {
  const [state, setState] = useState(<Articles />);

  return (
    <div>
      <Header />
      <div className="homepage-main-sec padding">
        <div className="container justify-between">
          <div className="articles-feed">
            <div className="border-feed">
              <span className="feed-tab" onClick={() => setState(<YourFeed />)}>
                Your Feed
              </span>
              <span className="feed-tab" onClick={() => setState(<Articles />)}>
                Global Feed
              </span>
            </div>
            <div>{state}</div>
          </div>
          <Tags />
        </div>
      </div>
      <Footer />
    </div>
  );
}
