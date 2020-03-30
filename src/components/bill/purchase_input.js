import React from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import * as action from "../../actions/item_action";





class PurchaseInput extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}


export default connect(function (state) {
    return;
})(PurchaseInput);