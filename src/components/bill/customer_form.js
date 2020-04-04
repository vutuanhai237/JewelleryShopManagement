import React from "react";
import { connect } from "react-redux";
import { Tab, Tabs, Row } from "react-bootstrap";
import "./form.scss"
class CustomerForm extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="customer" title="Khách hàng">
                        dâdadda
                    </Tab>
                    <Tab eventKey="note" title="Ghi chú">
                        dâdadda
                    </Tab>
                   
                </Tabs>
            </div>
        );
    }
}


export default connect(function (state) {
    return;
})(CustomerForm);