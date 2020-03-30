import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import * as action from "../../actions/item_action";
class RegisterForm extends React.Component {
    render() {
        return (
            <Form>
                {/* Mail */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Địa chỉ Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Hãy nhập đúng định dạng email.
                    </Form.Text>
                </Form.Group>
                {/* Mật khẩu mail */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* Thông tin người dùng: username, mật khẩu, mật khẩu lần 2 */}
                <Form.Group>
                    <Form.Label>Họ và tên</Form.Label>
                    <br />
                    <Form.Control size="sm" type="text" placeholder="Ví dụ: Nguyễn Văn A" />
                    <br />
                    <Form.Label>Mật khẩu đăng nhập</Form.Label>
                    <br />
                    <Form.Control size="sm" type="text" placeholder="Ví dụ: 1A2B3c4d" />
                    <br />
                    <Form.Label>Nhập lại mật khẩu</Form.Label>
                    <br />
                    <Form.Control size="sm" type="text" placeholder="Nhập chính xác như trường phía trên" />
                </Form.Group>
                { /* Submit */}
            
                <Button variant="primary" type="submit">
                    Đăng ký
                </Button>
            </Form>
        );
    }
}


export default connect(function (state) {
    return;
})(RegisterForm);