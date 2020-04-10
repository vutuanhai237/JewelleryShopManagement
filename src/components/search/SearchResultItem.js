import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import daquy4 from '../../images/daquy4.jpg';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class SearchResultItem extends Component {
    render() {
        return (
            <>
                <div className="py-3 mx-lg-5">
                    <Card>
                        <Row>
                            <Col md={4} className="d-flex justify-content-center">
                                <Image src={daquy4} />
                            </Col>
                            <Col md={6} className="px-3">
                                <Card.Body className="px-3">
                                    <Card.Title><a href="#!">Dây chuyền cao cấp chất lượng hàn xẻng</a></Card.Title>
                                    <Row>
                                        <Col md={6}>
                                            <strong>Giá: 100000đ</strong>
                                        </Col>
                                        <Col md={6}>
                                            <div>Giá gia công: 100000đ</div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 mt-1">
                                        <Col md={6}>
                                            <div>Tiêu chuẩn: SJC</div>
                                        </Col>
                                        <Col md={6}>
                                            <div>Khối lượng: 9kg</div>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Mô tả sản phẩm: Mặt hàng bán chạy nhất Đông Nam Á, cam kết đúng tiêu chuẩn
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md={2} className="d-flex align-items-center justify-content-center py-2">
                                <Button variant="outline-danger" className="btn-circle btn-lg" ><FontAwesomeIcon icon={faHeart}/> </Button>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </>
        );
    }
}

SearchResultItem.propTypes = {

                };

export default SearchResultItem;