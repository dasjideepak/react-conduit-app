import React from "react";
import { useEffect } from "react";
import CreateArticle from "../components/CreateArticle";

export default function UpdateArticlePage(props) {
  useEffect(() => {
    document.title = "Update Article | Conduit";
  }, []);
  return (
    <>
      <CreateArticle title="Update Article" />
    </>
  );
}
