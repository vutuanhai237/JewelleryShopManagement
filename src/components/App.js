import React from "react";
import Home from "./layout/Home";
import Search from "./layout/Search";
import LoginForm from "../containers/login/login_form";
import RegisterForm from "../containers/register/register_form";
import Purchase from "../components/bill/purchase_input";
import List from "../components/layout/List";
import {
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/search">
          <Search/>
        </Route>
        <Route exact path="/login">
          <div>This is login page</div>
        </Route>
        <Route exact path="/employee">
          <Home/>
        </Route>
      </Switch>
      <div className="App">
        <List>
        </List>\

      <Purchase />
      </div>
    </div>
  );
}

export default App;
