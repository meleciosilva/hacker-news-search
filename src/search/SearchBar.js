import { useState } from "react";

function SearchBar({ handleSubmit }) {

  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-center">
        <form onSubmit={(event) => handleSubmit(event, input)} className="d-flex col-xs-12 col-md-8">
          <input 
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
            value={input}
          />
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar;
