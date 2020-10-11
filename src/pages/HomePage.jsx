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
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Conduit";
  }, []);

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
