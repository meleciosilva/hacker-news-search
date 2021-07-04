import { useState, useEffect } from "react";

// accepts a url to make fetch request
const useRequest = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // re-runs effect if url is updated
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
    
    // cancels a pending request or response
    return () => abortController.abort();
    
  }, [url]);
  
  return { data, loading, error };
  
}

export default useRequest;