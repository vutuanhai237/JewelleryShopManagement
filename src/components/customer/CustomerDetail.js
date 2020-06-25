import React from "react";
import { Row, Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss";
class CustomerDetail extends React.Component {
    render() {
        const { customerCurrent } = this.props;
        return (
            <div>
                <Form className="pt-2 customer-form">
                    <Row className="pt-3">
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
                            {customerCurrent.ngay_sinh.substring(0, 10)}
                        </Form.Label>
                    </Row>
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
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerDetail));
