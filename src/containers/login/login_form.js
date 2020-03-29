import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import * as action from "../../actions/item_action";
class LoginForm extends React.Component {   
    render() {
        return (
            <Form>
                <Form.Label>Địa chỉ Email</Form.Label>
                {/* Mail */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Địa chỉ Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Hãy nhập đúng định dạng email.
                    </Form.Text>
                </Form.Group>
                {/* Password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Ghi nhớ đăng nhập" />
                </Form.Group>
                {/* Submit */}
                <Button variant="primary" type="submit">
                    Đăng nhập
                </Button>
            </Form>
        );
    }
}


export default connect(function (state) {
    return;
})(LoginForm);