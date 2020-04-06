import React from "react";
import Home from "./layout/Home";
import Search from "./layout/Search";
import Login from "./layout/Login";
import Register from "./layout/Register";
import Employee from "./layout/Employee";
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
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/employee">
          <Employee/>
        </Route>
      </Switch>
      <div className="App">
      </div>
    </Router>

  );
}

export default App;
