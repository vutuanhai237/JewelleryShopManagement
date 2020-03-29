import React from "react";
import List from "./List";
import LoginForm from "../../containers/login/login_form"
import RegisterForm from "../../containers/register/register_form"
import Purchase from "../../components/bill/purchase_input"

function App() {
  return (
    <div className="App">
      <List>
      </List>\
     
      <Purchase/>
    </div>
  );
}

export default App;
