import { useContext } from "react";
import ErrorAlert from "../shared/ErrorAlert";
import SearchBar from "./SearchBar";
import ListArticles from "./ListArticles";

import { LayoutContext } from "../contexts/LayoutContext";

function Search() {
  
  const { 
    data: { data: { hits }, loading, error },
    search
  } = useContext(LayoutContext);

  if (loading) return <h1>Loading...</h1>
  return (
    <div className="px-2 py-3">
      <SearchBar />
      <ErrorAlert error={error} />
      { !search ? <h1>No Articles Found</h1> : <ListArticles articles={hits} /> }
    </div>
  )
}

export default Search;