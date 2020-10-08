import { useState, useEffect } from "react";
import axios from "axios";

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

  useEffect(() => {
    if (state.url && state.value) {
      console.log(state.url, state.value);
      setIsLoading(true);
      axios
        .post(state.url, state.value)
        .then((result) => setData(result.data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [state.url, state.value]);
  return [{ isLoading, data, error }, setState];
}

export { useFetch, useFetchPost };
