import React from "react";
import { connect } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../form.scss";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      isLoginSuccess: false,
    };
  }
  login() {
    if (this.refs.email.value == "haimeohung@gmail.com" && this.refs.password.value == "12345") {
      this.setState({
        isLoginSuccess: true,
        modalShow: true,
      });
    }
    else {
      this.setState({
        isLoginSuccess: false,
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
  register() { }
  forgotpassword() { }
  loginfacebook() { }

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

export default connect(function (state) {
  return;
})(LoginForm);
