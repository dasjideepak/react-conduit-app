import React, { useEffect } from "react";
import Articles from "../components/Articles";
import Tags from "../components/Tags";
import YourFeed from "../components/YourFeed";
import { useState } from "react";

export default function AuthArticlesPage() {
  const [state, setState] = useState(<Articles />);
  useEffect(() => {
    document.title = "Dashboard | Conduit";
  }, []);

  return (
    <div className="homepage-main-sec padding">
      <div className="container justify-between">
        <div className="py-4">
          <div className="border-b-2">
            <button
              type="button"
              className="text-indigo-600 text-xl leading-9 font-extrabold tracking-tight sm:text-xl sm:leading-10 px-4 border-l-2 border-t-2"
              onClick={() => setState(<YourFeed />)}
            >
              Your Feed
            </button>
            <button
              type="button"
              className="text-indigo-600 text-xl leading-9 font-extrabold tracking-tight sm:text-xl sm:leading-10 px-4 border-l-2 border-t-2 border-r-2"
              onClick={() => setState(<Articles />)}
            >
              Global Feed
            </button>
          </div>
          <div className="pt-12">
            <Tags />
          </div>
          <div>{state}</div>
        </div>
      </div>
    </div>
  );
}
