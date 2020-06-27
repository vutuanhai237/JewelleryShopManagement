import React from "react";
import "../TopNav.scss";
import TopNav from '../TopNav';
import CustomerForm from "../../containers/customer/CustomerForm"
class Customer extends React.Component {


  render() {
    return (
      <div>
        <TopNav />
        <br></br>
        <CustomerForm/>
      </div>
    );
  }
}

export default Customer;
