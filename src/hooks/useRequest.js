import { useState, useEffect } from "react";
const axios = require("axios");

const useRequest = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(fetchData, [url]);

  function fetchData() {
    setData([]);
    setError(null);
    const abortController = new AbortController();
      setLoading(true);
      axios.get(url, { signal: abortController.signal })
        .then((response) => setData(response.data))
        .then(() => setLoading(false))
        .catch(setError)
    return () => abortController.abort();
  }

  return { data, loading, error };
  
}

export default useRequest;