import React from "react";
import Header from "../components/Header";
import Articles from "../components/Articles";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import HomeHeroSec from "../components/HomeHeroSec";
import Testmonials from "../components/Testmonials";
import Feedback from "../components/Feedback";
import ShowUpdates from "../components/ShowUpdates";
import RecentArticlesHeading from "../components/RecentArticlesHeading";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="homepage-main-sec">
        <HomeHeroSec />
        <RecentArticlesHeading />
        <Tags />
        <Articles />
        <ShowUpdates />
        <Testmonials />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
