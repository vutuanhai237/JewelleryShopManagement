import React from "react";

import { Form, Col, Row, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import EmployeeCatNav from "./EmployeeCatNav"
import DeliveryForm from "../../components/bill/DeliveryForm"
import CustomerForm from "../../components/bill/CustomerForm"
import ItemList from "../../components/bill/ItemList"
import PurchaseForm from "../../components/bill/PurchaseForm"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss"
class BillForm extends React.Component {

    addItem(evt) {
        const { itemList } = this.props;


        let objectFound = itemList.find(element => element.itemID == evt);

        if (objectFound != null) {
            this.props.addItemTemptList(objectFound);

        }

        this.forceUpdate();
    }

    render() {
        const { itemList, itemTemptList } = this.props;

        return (

            <div>
                <Row>
                    <EmployeeCatNav />
                </Row>
                <Row>
                    <Form className="bill-form">
                        <ButtonGroup justified>
                        <DropdownButton  className="dropdown" onSelect={(evt) => this.addItem(evt)} id="dropdown-item-button" title="Thêm sản phẩm vào hóa đơn">
                            {
                                itemList.map((e, i) =>
                                    <Dropdown.Item eventKey={e.itemID}>{e.name}</Dropdown.Item>

                                )
                            }
                        </DropdownButton>
                        </ButtonGroup>
                        <Row>
                            <Col sm={8} xs={12}>
                                <ItemList disabled = {this.props.disableItemList} key={itemTemptList}  />
                                <DeliveryForm />
                            </Col>
                            <Col sm={4} xs={12}>
                                <CustomerForm />
                                <PurchaseForm />
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
        itemList: state.employee.itemList,
        itemTemptList: state.employee.itemTemptList,
        disableItemList: state.employee.disableItemList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

        addItemTemptList: (itemID) => dispatch({ type: "EMPLOYEEADDITEMTEMPTLIST", item: itemID }),

    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BillForm));