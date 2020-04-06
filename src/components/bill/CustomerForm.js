import React from "react";
import { connect } from "react-redux";
import { Tab, Tabs, Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import "./form.scss";
import "../SearchBar.scss"
class CustomerForm extends React.Component {
    render() {
        return (
            <div>
                <Form className="pt-2 customer-form">
                    <Tabs defaultActiveKey="customer" id="uncontrolled-tab-example">
                        <Tab eventKey="customer" title="Khách hàng">
                            <Row className="pt-3">
                                <SearchBar className="search-bar"></SearchBar>
                            </Row>

                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    Tên
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    Nguyễn Văn A
                                </Form.Label>
                            </Row>

                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    SĐT
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    01234567
                                </Form.Label>
                            </Row>

                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    Địa chỉ
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    Tân Phú
                                </Form.Label>
                            </Row>
                        </Tab>
                        <Tab eventKey="note" title="Ghi chú">
                            <br />
                            <Row>

                                <FormControl className="note" size="lg" as="textarea" aria-label="With textarea" />
                            </Row>
                        </Tab>
                    </Tabs>
                </Form>
            </div>
        );
    }
}

export default CustomerForm;
