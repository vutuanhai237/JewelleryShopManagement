import React from "react";
import { connect } from "react-redux";
import { Form, Button, InputGroup, FormControl, Col, Row, Container } from "react-bootstrap";
import { faSearch, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import DeliveryForm from "../../components/bill/delivery_form"
import CustomerForm from "../../components/bill/customer_form"
class BillForm extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <div className="d-flex justify-content-center">
                            <Form className="bill-form">
                                <Form inline className="d-none flex-grow-1 d-md-flex">
                                    <div className="search-bar w-100 mx-lg-5">
                                        <InputGroup>
                                            <FormControl
                                                type="text"
                                                placeholder="Bạn muốn mặt hàng nào?"
                                            />
                                            <div className="input-group-append">
                                                <Button variant="light" type="button">
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </Button>
                                            </div>
                                        </InputGroup>
                                    </div>
                                </Form>
                            </Form>
                        </div>
                    </Row>

                    <Row>
                        <Col xs={8}>


                            <DeliveryForm />



                        </Col>
                        <Col xs={4}>

                            <CustomerForm/>


                        </Col>





                    </Row>

                </Container>





            </div>
        );
    }


}


export default connect(function (state) {
    return;
})(BillForm);