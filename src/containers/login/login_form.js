import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FacebookLogin from 'react-facebook-login';
import "./login_form.scss"
class LoginForm extends React.Component {
    login() {

    }
    register() {

    }
    forgotpassword() {

    }
    loginfacebook() {

    }
    render() {
        return (
            <div className="d-flex justify-content-center login-form">
                <Form>
                    <h4 className="text-center h4">Đăng nhập</h4>
                    <br/>
                    {/* Mail */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Hãy nhập đúng định dạng email.
                    </Form.Text>
                    </Form.Group>
                    {/* Password */}
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
                    </Form.Group>
                    {/* Submit */}
                    <Button className = "btn-lg btn-block" type="submit">
                        Đăng nhập                  
                    </Button>

                    <div className="text-center pt-3">Hoặc xem với tư cách khách</div>
                    <FacebookLogin/>
                    <div className="text-center">
                        <a href="/register">Đăng ký</a>
                        <span className="p-2">|</span>
                        <a href="/forgotpass">Quên mật khẩu</a>
                    </div>
                
                
                </Form>
            </div>


        );
    }
}


export default connect(function (state) {
    return;
})(LoginForm);