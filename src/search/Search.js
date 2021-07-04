import { useState, useEffect } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import SearchBar from "./SearchBar";
import ListArticles from "./ListArticles";
const axios = require("axios");

function Search() {
  
  const [search, setSearch] = useState(null);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(fetchArticles, [search]);

  function fetchArticles() {
    const abortController = new AbortController();
    setSearch(null);
    setError(null);
    if (search) {
      const url = `http://hn.algolia.com/api/v1/search?query=${search}`;
      axios.get(url, { signal: abortController.signal })
        .then((response) => setArticles(response.data.hits))
        .catch(setError)
    }
    return () => abortController.abort();
  }

  function handleSubmit(event, input) {
    event.preventDefault();
    setSearch(input);
    console.log(input)

  }
  
  return (
    <div className="px-2 py-3">
      <SearchBar handleSubmit={handleSubmit}/>
      <ErrorAlert error={error} />
      <ListArticles articles={articles} />
    </div>
  )
}

export default Search;