import { useState, useEffect } from "react";

const useRequest = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError(null);
    const abortController = new AbortController();
    async function fetchData() {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch(err) {
          if (err.name === "AbortError") {
            return console.log("Request Aborted");
          } else {
            setError(err);
          }
        }
      }
    fetchData();

    return () => abortController.abort();
    
  }, [url]);
  
  return { data, loading, error };
  
}

export default useRequest;