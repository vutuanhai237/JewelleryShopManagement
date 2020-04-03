import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small pt-4">
                <Container className="text-center text-md-left">
                    <Row>
                        <Col md='4' className="mb-md-0 mb-3">
                            <h5 className="text-uppercase">Về chúng tôi</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Vàng Store</a>
                                </li>
                                <li>
                                    <a href="#!">Hệ thống cửa hàng</a>
                                </li>
                                <li>
                                    <a href="#!">Nhận xét đánh giá</a>
                                </li>
                                <li>
                                    <a href="#!">Tuyển dụng</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md='4' className="mb-md-0 mb-3">
                            <h5 className="text-uppercase">Chăm sóc khách hàng</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Chính sách bảo hành</a>
                                </li>
                                <li>
                                    <a href="#!">Tin tức khuyến mại</a>
                                </li>
                                <li>
                                    <a href="#!">Hướng dẫn mua hàng</a>
                                </li>
                                <li>
                                    <a href="#!">Câu hỏi thường gặp</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md='4' className="mb-md-0 mb-3">
                            <h5 className="text-uppercase">Kết nối với chúng tôi</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Hotline: 0123-456-7890</a>
                                </li>
                                <li>
                                    <a href="#!">Fanpage</a>
                                </li>
                                <li>
                                    <a href="#!">Instagram</a>
                                </li>
                                <li>
                                    <a href="#!">Youtube</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    © 2020
                <a href="/"> VangStore</a>
                </div>
            </footer>
        );
    }
}

export default Footer;