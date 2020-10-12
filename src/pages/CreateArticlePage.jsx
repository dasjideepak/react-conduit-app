import React from "react";
import { useEffect } from "react";
import CreateArticle from "../components/CreateArticle";

export default function CreateArticlePage() {
  useEffect(() => {
    document.title = "Create Article | Conduit";
  }, []);
  return (
    <>
      <CreateArticle />
    </>
  );
}
