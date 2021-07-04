import { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import SearchBar from "./SearchBar";
import ListArticles from "./ListArticles";
import useRequest from "../hooks/useRequest";

function Search() {

  const [search, setSearch] = useState(null);
  const { data: { hits }, loading, error } = useRequest(`http://hn.algolia.com/api/v1/search?query=${search}`);

  function handleSubmit(event, input) {
    event.preventDefault();
    setSearch(input);
    console.log(input);
  }
  
  if (loading) return <h1>Loading...</h1>
  return (
    <div className="px-2 py-3">
      <SearchBar handleSubmit={handleSubmit} />
      <ErrorAlert error={error} />
      { !search ? <h1>No Articles Found</h1> : <ListArticles articles={hits} /> }
    </div>
  )
}

export default Search;