import React from "react";
import { connect } from "react-redux";
import { Tab, Tabs, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "./form.scss";
class PurchaseForm extends React.Component {
    render() {
        return (
            <div>
                <Form className="pt-2 purchase-form">
                    <Tabs defaultActiveKey="purchase" id="uncontrolled-tab-example">
                        <Tab eventKey="purchase" title="Thanh toán">
                            <Row className="pt-3">
                                <Form.Label column lg="5" xs="5">
                                    VAT
                                </Form.Label>
                                <Col lg="5" xs="5">
                                    <Form.Control className="text-right" plaintext readOnly defaultValue="10" />
                                </Col>
                                <InputGroup.Append column lg="2"xs="2">
                                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                </InputGroup.Append>
                            </Row>
                            <Row>
                                <Form.Label column lg="5"xs="5">
                                    Chiết khấu
                                </Form.Label>
                                <Col lg="5" xs="5">
                                    <Form.Control className="text-right" plaintext readOnly defaultValue="10" />
                                </Col>
                                <InputGroup.Append column lg="2"xs="2">
                                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                                </InputGroup.Append>
                            </Row>
                            <Row>
                                <Form.Label column lg="5" xs="5">
                                    Tổng tiền
                                </Form.Label>
                                <Col lg="4"xs="4">
                                    <Form.Control className="text-right" plaintext readOnly defaultValue="" />
                                </Col>
                                <Col lg="2"xs="2">

                                    <InputGroup.Append >
                                        <InputGroup.Text id="basic-addon2">VNĐ</InputGroup.Text>
                                    </InputGroup.Append>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Label column lg="5" xs="5">
                                    Tiền thối
                                </Form.Label>
                                <Col lg="4"xs="4">
                                    <Form.Control className="text-right" plaintext readOnly defaultValue="" />
                                </Col>
                                <Col lg="2"xs="2">
                                    <InputGroup.Append >
                                        <InputGroup.Text id="basic-addon2">VNĐ</InputGroup.Text>
                                    </InputGroup.Append>
                                </Col>

                            </Row>
                            <Row>
                                <Form.Label column lg="5" xs="5">
                                    Khách đưa
                                </Form.Label>
                                <Col lg="4"xs="4">
                                    <Form.Control className="text-right" type="text" placeholder="" />
                                </Col>
                                <Col lg="2"xs="2">
                                    <InputGroup.Append >
                                        <InputGroup.Text id="basic-addon2">VNĐ</InputGroup.Text>
                                    </InputGroup.Append>
                                </Col>
                            </Row>
                            <Row>
                                <Button className="float-right btn-block" type="Submit">Thanh toán</Button>
                            </Row>

                        </Tab>
                        <Tab eventKey="debt" title="Nợ">
                            <Row className="pt-3">
                                <Button className="float-right btn-block" type="Submit">Ghi nợ</Button>
                            </Row>
                        </Tab>
                    </Tabs>
                </Form>
            </div>
        );
    }
}

export default PurchaseForm;
