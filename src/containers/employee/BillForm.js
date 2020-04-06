import React from "react";
import { connect } from "react-redux";
import { Form, Col, Row, Container } from "react-bootstrap";
import EmployeeCatNav from "./EmployeeCatNav"
import DeliveryForm from "../../components/bill/DeliveryForm"
import CustomerForm from "../../components/bill/CustomerForm"
import ItemList from "./ItemList"
import PurchaseForm from "../../components/bill/PurchaseForm"
import SearchBar from "../../components/SearchBar"

import "./form.scss"
class BillForm extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <EmployeeCatNav />
                    </Row>

                    <Row>
                        <Form className="bill-form">
                            <SearchBar className="search-bar" row placeholder='Điền tên hoặc mã mặt hàng' paramName='keyword' action='/search' className='d-none flex-grow-1 d-md-flex mx-lg-5' />

                            <Row>

                                <Col sm={8} xs={12}>
                                    <ItemList />
                                    <DeliveryForm />
                                </Col>
                                <Col sm={4} xs={12}>
                                    <CustomerForm />
                                    <PurchaseForm />
                                </Col>
                            </Row>
                        </Form>

                    </Row>
                </Container>
            </div>
        );
    }
}


export default BillForm;