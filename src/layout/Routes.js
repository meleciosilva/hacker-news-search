import { Switch, Route, Redirect } from "react-router-dom";
import Search from "../search/Search";
import History from "../history/History";
import NotFound from "./NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/"}/>
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/history">
        <History />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes;