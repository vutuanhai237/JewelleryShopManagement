import React from "react";
import { connect } from "react-redux";
import { Form, Button, Col, Modal } from "react-bootstrap";
import "../form.scss";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            isRegisterSuccess: false,
        };
    }
    register() {
        if (this.refs.email.value !== "haimeohung@gmail.com") {
            this.setState({
                isRegisterSuccess: true,
                modalShow: true,
            });
        } else {
            this.setState({
                isRegisterSuccess: false,
                modalShow: true,
            });
        }
        this.forceUpdate();
    }
    handleClose() {
        this.setState({
            modalShow: false,
        });
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
                        <Modal.Title contained-modal-title-vcenter>Thông báo</Modal.Title>
                    </Modal.Header>
                    {(() => {
                        if (this.state.isRegisterSuccess) {
                            return (
                                <div>
                                    <Modal.Body>Đăng ký thành công</Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="success"
                                            href="/login"
                                            onClick={this.handleClose.bind(this)}
                                        >
                                            Đồng ý
                    </Button>
                                    </Modal.Footer>
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <Modal.Body>Đăng ký thất bại</Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="danger"
                                            onClick={this.handleClose.bind(this)}
                                        >
                                            Đồng ý
                    </Button>
                                    </Modal.Footer>
                                </div>
                            );
                        }
                    })()}
                </Modal>
                <div className="d-flex justify-content-center">
                    <Form className="register-form">
                        <h4 className="text-center h4">Đăng ký</h4>
                        <br />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control
                                ref="email"
                                type="email"
                                placeholder="Ví dụ: abc@gmail.com"
                            />
                        </Form.Group>

                        <Form.Row>
                            {/* Mật khẩu mail */}
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Ví dụ: ***" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Xác nhận Mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Ví dụ: ***" />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Họ và tên</Form.Label>
                            <br />
                            <Form.Control
                                size="md"
                                type="text"
                                placeholder="Ví dụ: Nguyễn Văn A"
                            />
                            <br />
                            <Form.Label>CMND / CCCD</Form.Label>
                            <br />
                            <Form.Control
                                size="md"
                                type="text"
                                placeholder="Ví dụ: 231111111"
                            />
                            <br />
                            <Form.Row>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Ngày sinh</Form.Label>
                                    <Form.Control type="text" placeholder="Ví dụ: 5/5/2020" />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Giới tính</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                        <option>Khác</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Label>Số điện thoại</Form.Label>
                            <br />
                            <Form.Control
                                size="md"
                                type="text"
                                placeholder="Ví dụ: 0123456789"
                            />
                        </Form.Group>
                        <hr></hr>
                        <Button
                            className="btn-lg btn-block"
                            onClick={this.register.bind(this)}
                        >
                            Đăng ký
            </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    return;
})(RegisterForm);
