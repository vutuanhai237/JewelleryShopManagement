import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import CustomerList from "../../components/customer/CustomerList"
import CustomerDetail from "../../components/customer/CustomerDetail"
import CustomerAdd from "../../components/customer/CustomerAdd"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
class CustomerForm extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Form className="bill-form">
                        <Row>
                            <Col sm={8} xs={12}>
                                <CustomerList/>
                            </Col>
                            <Col sm={4} xs={12}>
                                <CustomerDetail />
                                <CustomerAdd />
                            </Col>

                        </Row>
                    </Form>
                </Row>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerForm));