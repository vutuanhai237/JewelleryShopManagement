import React from "react";
import Home from "./layout/Home";
import Search from "./layout/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/search">
          <Search/>
        </Route>
        <Route exact path="/login">
          <Search/>
        </Route>
        <Route exact path="/employee">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
