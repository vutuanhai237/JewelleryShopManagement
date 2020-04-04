import React from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';
import "./form.scss"
class DeliveryForm extends React.Component {
    render() {
        return (
            <Form className="delivery-form">
                <h5>Giao nhận</h5>
                {/* // */}
                <Form.Group className="pt-2" as={Row} bsStyle="success">
                    <Form.Label column sm="2" >Ngày nhận</Form.Label>
                    <Col column sm="10">
                        <DateTime pickerOptions={{ format: "LL" }} value="2017-04-20" />
                    </Col>
                </Form.Group>
                <Form.Group className="" as={Row}>
                    <Form.Label column sm="2" >Ngày giao</Form.Label>
                    <Col column sm="10">
                        <DateTime pickerOptions={{ format: "LL" }} value="2017-04-20" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2" >Địa chỉ nhận</Form.Label>
                    <Col column sm="10">
                        <Form.Control as="select" custom>
                            <option>Địa chỉ quận 7</option>
                            <option>Địa chỉ quận 5</option>
                            <option>Địa chỉ quận 7</option>
                            <option>Địa chỉ quận 7</option>
                            <option>Địa chỉ quận 7</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group className="" as={Row}>
                    <Form.Label column sm="2" >Địa chỉ giao</Form.Label>
                    <Col column sm="10">
                        <Form.Control placeholder="Ví dụ: Chi nhánh quận 7" />
                    </Col>
                </Form.Group>
            
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button className="float-right" type="Submit">Khách lấy liền</Button>
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}


export default connect(function (state) {
    return;
})(DeliveryForm);