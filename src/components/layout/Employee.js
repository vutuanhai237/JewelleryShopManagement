import React from "react";
import "../TopNav.scss";
import TopNav from '../TopNav';
import BillForm from "../../containers/employee/BillForm"
class Employee extends React.Component {


  render() {
    return (
      <div>
        <TopNav />
        <br></br>
        <BillForm/>
      </div>
    );
  }
}

export default Employee;
