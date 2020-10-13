import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then((result) => setData(result))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { data, isLoading, error };
}

function useFetchPost() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [state, setState] = useState({ value: null, url: "" });

  const ROOT_URL = "https://mighty-oasis-08080.herokuapp.com/";
  let article = {
    article: {
      title: "How to train your dragon",
      description: "Ever wonder how?",
      body: "You have to believe",
      tagList: ["reactjs", "angularjs", "dragons"],
    },
  };

  useEffect(() => {
    if (state.url && state.value) {
      console.log(ROOT_URL + state.url, article, state.headers);
      setIsLoading(true);

      fetch(ROOT_URL + state.url, {
        method: "post",
        headers: {
          ...state.headers,
        },
        body: JSON.stringify(state.value),
      })
        .then((result) => result.json())
        .then((result) => setData(result.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [state.url, state.headers, state.value]);
  return [{ isLoading, data, error }, setState];
}

export { useFetch, useFetchPost };
