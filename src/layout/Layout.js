import React, { useState } from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import { LayoutContext } from "../contexts/LayoutContext";
import useRequest from "../hooks/useRequest";

function Layout() {

  const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);
  
  const data = useRequest(`http://hn.algolia.com/api/v1/search?query=${search}`);
  
  const handleSubmit = (event, input) => {
    event.preventDefault();
    setSearch(input);
    setHistory(prevState => [...prevState, input]);
  }

  return (
    <LayoutContext.Provider value={{ data, handleSubmit, search, history }}>
      <Menu />
      <Routes />
    </LayoutContext.Provider>
  )
}

export default Layout;