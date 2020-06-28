import React from "react";

import { Form, Col, Row, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import EmployeeCatNav from "./EmployeeCatNav"
import DeliveryForm from "../../components/bill/DeliveryForm"
import CustomerForm from "../../components/bill/CustomerForm"
import ItemList from "../../components/bill/ItemList"
import PurchaseForm from "../../components/bill/PurchaseForm"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss";
import axios from "axios";
import { HOST, PORT } from "../../constants"
class BillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
            listTemptProducts: [],
        }
    }
    addItem(evt) {
        const { listProducts } = this.state;
        let objectFound = listProducts.find(item => item.idsp === evt);
        objectFound.so_luong = 1;
        if (objectFound != null) {
            this.props.addItemTemptList(objectFound);
        }
        this.forceUpdate();
    }

    componentDidMount() {
        this.fetchAllProduct();
    }

    fetchAllProduct() {
        var data = '';
        var config = {
            method: 'get',
            url: `http://${HOST}:${PORT}/free/sanpham/search?loai_sp=&ten_sp=&from=0&so_luong=1000`,
            headers: {},
            data: data
        };

        axios(config)
            .then(response => {
                this.setState({
                    listProducts: JSON.parse(JSON.stringify(response.data.ds_sanpham)),
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { itemTemptList } = this.props;
        const { listProducts } = this.state;
        return (
            <div>
                <Row>
                    <Form className="bill-form">
                        <ButtonGroup justified="true">
                            <DropdownButton className="dropdown" onSelect={(idsp) => this.addItem(idsp)} id="dropdown-item-button" title="Thêm sản phẩm vào hóa đơn">
                                {
                                    listProducts.map(item =>
                                        <Dropdown.Item eventKey={item.idsp}>{item.ten_sp}</Dropdown.Item>
                                    )
                                }
                            </DropdownButton>
                        </ButtonGroup>
                        <Row>
                            <Col sm={8} xs={12}>
                                <ItemList disabled={this.props.disableItemList} key={itemTemptList} />
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
        itemTemptList: state.employee.itemTemptList,
        disableItemList: state.employee.disableItemList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

        addItemTemptList: (item) => dispatch({ type: "EMPLOYEE_ADD_ITEMTEMPTLIST", item: item }),

    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BillForm));