import React from "react";
import { connect } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HOST, PORT, GLOBAL_CHANGE } from '../../constants';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import "../form.scss";
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            isLoginSuccess: false,
        };
    }

    GetNhanVienByToken() {

        var config = {
            method: 'get',
            url: `hhttp://${HOST}:${PORT}/nhanvien/canhan`,
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem("token"),
            }
        };

        axios(config)
            .then(response => {
                sessionStorage.setItem("id_nv", JSON.parse(JSON.stringify(response.data)).id);
            })
            .catch(error => {
                console.log(error);
            });

    }


    login() {

        axios.post(`http://${HOST}:${PORT}/free/login`, {
            "ten_dang_nhap": this.refs.email.value,
            "mat_khau": this.refs.password.value
        }).then(response => {
            var data = JSON.parse(JSON.stringify(response.data));
            if (response.status === 200) {
                this.setState({
                    isLoginSuccess: true,
                    modalShow: true,
                });
                sessionStorage.setItem("token", JSON.parse(JSON.stringify(response.data.token)));
                sessionStorage.setItem("id", data.data.id);
                this.GetNhanVienByToken();
                this.props.globalChange(data.data.id, data.data.anh_dai_dien, data.data.loai_tk);
            }
        })
            .catch(error => {
                if (error.response.status === 401) {
                    this.setState({
                        isLoginSuccess: false,
                        modalShow: true,
                    });
                } else {
                    console.log(error);
                }
            });
    }
    handleClose() {
        this.setState({
            modalShow: false,
        });
    }
    register() { }
    forgotpassword() { }

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

                        if (this.state.isLoginSuccess) {
                            return <div>
                                <Modal.Body>Đăng nhập thành công</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="success" href="/" onClick={this.handleClose.bind(this)}>
                                        Đồng ý
                                    </Button>
                                </Modal.Footer>
                            </div>
                        } else {
                            return <div>
                                <Modal.Body>Đăng nhập thất bại</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={this.handleClose.bind(this)}>
                                        Đồng ý
                                    </Button>
                                </Modal.Footer>
                            </div>
                        }
                    })()}


                </Modal>

                <div className="d-flex justify-content-center">
                    <Form className="login-form">
                        <h4 className="text-center h4">Đăng nhập</h4>
                        <br />
                        {/* Mail */}
                        <Form.Group className="email-input" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Nhập tên đăng nhập" ref="email" />
                        </Form.Group>
                        {/* Password */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Nhập mật khẩu" ref="password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
                        </Form.Group>
                        {/* Submit */}
                        <Button
                            className="btn-lg btn-block"
                            onClick={this.login.bind(this)}
                        >
                            Đăng nhập
            </Button>
                        <Link to="/">
                            <p className="text-center pt-3">Hoặc xem với tư cách khách</p>
                        </Link>
                        <hr></hr>
                        <div className="text-center">
                            <a href="/register">Đăng ký</a>
                            <span className="p-2">|</span>
                            <a href="/forgotpass">Quên mật khẩu</a>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        globalID: state.global.id,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        globalChange: (id, anh_dai_dien, loai_tk) => dispatch({
            type: GLOBAL_CHANGE,
            id: id,
            anh_dai_dien: anh_dai_dien,
            loai_tk: loai_tk,
        }),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));