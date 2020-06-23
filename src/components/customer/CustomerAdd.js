import React from "react";
import { Tab, Tabs, Row, Form, Col, FormControl, DropdownButton, Dropdown, Modal, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss";
import axios from 'axios';
class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            ten_kh: "",
            cmnd: "", isCMNDValid: true,
            gioi_tinh: "Nam",
            sdt: "", isSDTValid: true,
            ngay_sinh: "", isNgaySinhValid: true,
        };
    }

    showModal() {
        this.setState({
            modalShow: true,
        });
    }
    addCustomer() {
        var data = JSON.stringify({
            "ten_kh": this.state.ten_kh,
            "cmnd": this.state.cmnd,
            "gioi_tinh": this.state.gioi_tinh,
            "sdt": this.state.sdt,
            "ngay_sinh": this.state.ngay_sinh
        });
        var config = {
            method: 'post',
            url: 'http://chvbdq.herokuapp.com:80/khachhang/tao',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(response => {
                alert("Tạo khách hàng thành công !");
                this.setState({
                    modalShow: false,
                });
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error);
                alert("SĐT hoặc CMND không hợp lệ, vui lòng nhập lại");
            });
    }

    handleClose() {
        this.setState({
            modalShow: false,
        });
    }

    handleOK() {
        //this.props.addCustomer(this.state.ten_kh, this.state.cmnd, this.state.gioi_tinh, this.state.sdt, this.state.ngay_sinh);
        this.addCustomer();      
        this.forceUpdate();
    }


    ten_khChangeAction(evt) {
        this.setState({ ten_kh: evt.target.value });
    }


    cmndChangeAction(evt) {
        this.setState({ cmnd: evt.target.value });
        if (this.state.cmnd.length === 9) {

            this.setState({ isCMNDValid: true });
        } else {
            this.setState({ isCMNDValid: false });
        }
    }

    gioi_tinhChangeAction(evt) {
        console.log(evt.target.value);
        this.setState({ gioi_tinh: evt.target.value });
    }

    sdtChangeAction(evt) {
        this.setState({ sdt: evt.target.value });
        if (this.state.sdt.length === 9) {

            this.setState({ isSDTValid: true });
        } else {
            this.setState({ isSDTValid: false });
        }
    }

    ngay_sinhChangeAction(evt) {
        this.setState({ ngay_sinh: evt.target.value });
        if (new Date().getFullYear() - evt.target.value.split("-")[0] >= 18) {
            this.setState({ isNgaySinhValid: true });
        } else {
            this.setState({ isNgaySinhValid: false });
        }
    }

    render() {
        return (
            <div>
                <Modal
                    centered
                    show={this.state.modalShow}
                    onHide={this.handleClose.bind(this)}
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title contained-modal-title-vcenter>Thêm khách hàng</Modal.Title>
                    </Modal.Header>
                    {(() => {
                        return <div>
                            <Modal.Body>
                                <Form.Group className="pt-2" as={Row} bsStyle="success">
                                    <Form.Label column sm="3" >Tên</Form.Label>
                                    <Col column sm="9">
                                        <Form.Control value={this.state.ten_kh} onChange={this.ten_khChangeAction.bind(this)} placeholder="Ví dụ: Vũ Văn A" />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="" as={Row}>
                                    <Form.Label column sm="3" >CMND</Form.Label>
                                    <Col column sm="9">
                                        {/* <DateTime className="date-time" pickerOptions={{ format: "LL" }} value="2017-04-20" /> */}
                                        <Form.Control value={this.state.cmnd} onChange={this.cmndChangeAction.bind(this)} placeholder="Ví dụ: 231205555" />

                                        {(() => {
                                            if (!this.state.isCMNDValid) {
                                                return <Form.Label style={{ color: "red" }} column="sm" >CMND phải bao gồm 10 số</Form.Label>

                                            }
                                        })()}

                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="3" >Giới tính</Form.Label>
                                    <Col column sm="9">
                                        <Form.Control value={this.state.gioi_tinh} onChange={this.gioi_tinhChangeAction.bind(this)} as="select" custom>
                                            <option>Nam</option>
                                            <option>Nữ</option>
                                            <option>Khác</option>

                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group className="" as={Row}>
                                    <Form.Label column sm="3" >Số điện thoại</Form.Label>
                                    <Col column sm="9">
                                        {/* <DateTime className="date-time" pickerOptions={{ format: "LL" }} value="2017-04-20" /> */}
                                        <Form.Control value={this.state.sdt} onChange={this.sdtChangeAction.bind(this)} placeholder="Ví dụ: 0814822188" />
                                        {(() => {
                                            if (!this.state.isSDTValid) {
                                                return <Form.Label style={{ color: "red" }} column="sm" >Số điện thoại phải bao gồm 10 số</Form.Label>

                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                                <Form.Group className="" as={Row}>
                                    <Form.Label column sm="3" >Ngày sinh</Form.Label>
                                    <Col column sm="9">
                                        {/* <DateTime className="date-time" pickerOptions={{ format: "LL" }} value="2017-04-20" /> */}
                                        <Form.Control onChange={this.ngay_sinhChangeAction.bind(this)} type="date"></Form.Control>
                                        {(() => {
                                            if (!this.state.isNgaySinhValid) {
                                                return <Form.Label style={{ color: "red" }} column="sm" >Khách hàng phải trên 18 tuổi</Form.Label>

                                            }
                                        })()}
                                    </Col>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button disabled={!this.state.isCMNDValid || !this.state.isNgaySinhValid || !this.state.isSDTValid} variant="success" onClick={this.handleOK.bind(this)}>
                                    Đồng ý
                                </Button>
                                <Button variant="danger" onClick={this.handleClose.bind(this)}>
                                    Thoát
                                </Button>
                            </Modal.Footer>
                        </div>

                    })()}

                </Modal>

                <hr />
                <Button className="btn-lg btn-block"
                    onClick={this.showModal.bind(this)}
                    variant="success">Thêm khách hàng</Button>


            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCustomer: (ten_kh, cmnd, gioi_tinh, sdt, ngay_sinh) => dispatch(
            {
                type: "CUSTOMER_ADD", payload: [
                    {
                        ten_kh: ten_kh,
                        cmnd: cmnd,
                        gioi_tinh: gioi_tinh,
                        sdt: sdt,
                        ngay_sinh: ngay_sinh
                    }
                ]
            })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(CustomerAdd));
