import React from "react";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="homepage-main-sec">
        <div className="container justify-between">
          <Articles />
          <Tags />
        </div>
      </div>
      <Footer />
    </div>
  );
}
