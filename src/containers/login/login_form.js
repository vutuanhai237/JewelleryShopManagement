import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FacebookLogin from "../../components/login/FBLoginButton";
import "../form.scss";
class LoginForm extends React.Component {
  login() {}
  register() {}
  forgotpassword() {}
  loginfacebook() {}

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <Form className="register-form">
            <h4 className="text-center h4">Đăng nhập</h4>
            <br />
            {/* Mail */}
            <Form.Group className="email-input" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Nhập tên đăng nhập" />
            </Form.Group>
            {/* Password */}
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Nhập mật khẩu" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
            </Form.Group>
            {/* Submit */}
            <Button className="btn-lg btn-block" type="submit">
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

export default connect(function(state) {
  return;
})(LoginForm);
