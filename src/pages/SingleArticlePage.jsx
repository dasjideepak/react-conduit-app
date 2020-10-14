import React, { useEffect } from "react";
import Article from "../components/Article";

export default function SingleArticlePage(props) {
  useEffect(() => {
    document.title = "Article | Conduit";
  }, []);
  return (
    <Article
      setIsDeleteModalVisibile={props.setIsDeleteModalVisibile}
      user={props.user}
    />
  );
}
