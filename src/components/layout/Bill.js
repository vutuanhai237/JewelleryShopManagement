import React from "react";
import "../TopNav.scss";
import { connect } from "react-redux";
import BillForm from "../../containers/employee/bill_form"
class Bill extends React.Component {


  render() {
    return (
      <div>
        <BillForm/>
      </div>
    );
  }
}

export default connect(function(state) {
  return;
})(Bill);
