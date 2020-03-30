import React from "react";
import Home from "./layout/Home";
import Search from "./layout/Search";
import LoginForm from "../../containers/login/login_form"
import RegisterForm from "../../containers/register/register_form"
import Purchase from "../../components/bill/purchase_input"
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
      <div className="App">
        <List>
        </List>\

      <Purchase />
      </div>
    </Router>
  );
}

export default App;
