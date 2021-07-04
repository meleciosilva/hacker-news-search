import { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

function History() {

  const { history } = useContext(LayoutContext);
  
  return (
    <div className="p-2">
      { history.length ? <h1>Search History</h1> : <h1>No Search History</h1> }
      { history.map((listing, index) => (
        <div key={index}>
          <h2>{ `${index+1}.)` } { listing }</h2>
        </div>
      )) }
    </div>
  )
}

export default History;