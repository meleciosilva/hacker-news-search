import { useContext } from "react";
import ErrorAlert from "../shared/ErrorAlert";
import SearchBar from "./SearchBar";
import ListArticles from "./ListArticles";

import { LayoutContext } from "../contexts/LayoutContext";

function Search() {
  
  const { 
    data: { data: { hits }, loading, error }
  } = useContext(LayoutContext);

  return (
    <div className="px-2 py-3">
      <SearchBar />
      <ErrorAlert error={error} />
      { loading ? <h3>Loading...</h3> : <ListArticles articles={hits} /> }
    </div>
  )
}

export default Search;