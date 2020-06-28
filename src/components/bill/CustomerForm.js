import React from "react";
import { Tab, Tabs, Row, Form, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss";
import "../SearchBar.scss";
import { HOST, PORT } from "../../constants"
import axios from "axios";
class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            customerCurrent: {},
        }
    }

    componentDidMount() {
        this.fetchAllCustomer();
    }

    fetchAllCustomer() {
        var config = {
            method: 'get',
            url: `https://${HOST}:${PORT}/khachhang/search?ten_kh=&cmnd=&from=0&count=10`,
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            }
        };
        axios(config)
            .then(response => {
                this.setState({
                    customerList: JSON.parse(JSON.stringify(response.data)).ds_khachhang,
                })
            })
            .catch(error => {
                console.log(error);
            });

    }


    fetchCustomerByID(id) {
        var config = {
            method: 'get',
            url: `https://${HOST}:${PORT}/khachhang/getbyid/` + id,
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
            }
        };

        axios(config)
            .then(response => {
                this.setState({
                    customerCurrent: JSON.parse(JSON.stringify(response.data))
                });
                this.props.detailCustomer(this.state.customerCurrent);
            })
            .catch(error => {
                console.log(error);
            });
    }

    detailCustomer(evt) {
        this.fetchCustomerByID(evt);
    }
    render() {
        const { customerList, customerCurrent } = this.state;
        return (
            <div>
                <Form className="pt-2 customer-form">
                    <Tabs defaultActiveKey="customer" id="uncontrolled-tab-example">
                        <Tab eventKey="customer" title="Khách hàng">
                            <Row className="pt-3">
                                <DropdownButton onSelect={(evt) => this.detailCustomer(evt)} id="dropdown-item-button" title="Chọn khách hàng">
                                    {
                                        customerList.map(item =>
                                            <Dropdown.Item eventKey={item.id}>{item.ten_kh}</Dropdown.Item>
                                        )
                                    }
                                </DropdownButton>
                            </Row>

                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    Tên
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    {customerCurrent.ten_kh}
                                </Form.Label>
                            </Row>
                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    CMND
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    {customerCurrent.cmnd}
                                </Form.Label>
                            </Row>
                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    Giới tính
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    {customerCurrent.gioi_tinh}
                                </Form.Label>
                            </Row>

                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    SĐT
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    {customerCurrent.sdt}
                                </Form.Label>
                            </Row>
                            <Row>
                                <Form.Label className="text-left" column lg="5" xs="5">
                                    Ngày sinh
                                </Form.Label>
                                <Form.Label className="text-right" column lg="7" xs="7">
                                    {customerCurrent.ngay_sinh && customerCurrent.ngay_sinh.substring(0, 10)}
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

const mapStatetoProps = (state) => {
    return {
        customerCurrent: state.customer.customerCurrent,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        detailCustomer: (customer) => dispatch({ type: "CUSTOMER_CHANGE", customer: customer })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerForm));
