import React from "react";
import "../TopNav.scss";
import TopNav from '../TopNav';
import BillForm from "../../containers/employee/BillForm"
import EmployeeCatNav from "../../containers/employee/EmployeeCatNav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustomerForm from "../../containers/customer/CustomerForm"
class Employee extends React.Component {


  render() {

    return (
      <div className="head" style={{ height: '100vh', overflowY: 'scroll' }}>
        <BrowserRouter forceRefresh>
          <TopNav {...this.props} />
          <EmployeeCatNav className="mt-5" />
          <Switch>
            <Route exact path="/employee/invoice">
              <BillForm />
            </Route>
            <Route path="/employee/customer">
              <CustomerForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Employee;
