import React from "react";
import { Tab, Tabs, Row, Form, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss";
import "../SearchBar.scss"
class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {customer: []};
        this.setState(this.state);
    }
    setDetailCustomer(cmnd) {
        this.props.setDetailCustomer(cmnd);
        this.forceUpdate();
    }
    render() {
        const {customerList, customerCurrent} = this.props;

        return (
            <div>
                <Form className="pt-2 customer-form">
                    <Tabs defaultActiveKey="customer" id="uncontrolled-tab-example">
                        <Tab eventKey="customer" title="Khách hàng">
                            <Row className="pt-3">
                            <DropdownButton onSelect={(evt) => this.setDetailCustomer(evt)} id="dropdown-item-button" title="Chọn khách hàng">
                                {
                                    customerList.map((item) =>
                                        <Dropdown.Item eventKey={item.cmnd}>{item.ten_kh}</Dropdown.Item>
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
                                    {customerCurrent.ngay_sinh}
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
        customerList: state.customer.customerList,
        customerCurrent: state.customer.customerCurrent,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDetailCustomer: (cmnd) => dispatch({ type: "CUSTOMER_CHANGE", cmnd: cmnd })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerForm));
