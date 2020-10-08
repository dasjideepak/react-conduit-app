import { useState, useEffect } from "react";

export default function useFetch(url) {
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
