import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import daquy4 from '../../images/daquy4.jpg';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class SearchResultItem extends Component {


    render() {

        const { item } = this.props;

        return (
            <>
                <div className="py-2 py-md-1 mx-lg-5">
                    <Card>
                        <Row>
                            <Col md={4} className="d-flex justify-content-center">
                                <Image src={item.anh_dai_dien} />
                            </Col>
                            <Col md={6} className="px-3">
                                <Card.Body className="px-3">
                                    <Card.Title><a href="#!">{item.ten_sp}</a></Card.Title>
                                    <Row>
                                        <Col md={6}>
                                            <strong>Giá: {item.gia_ban} đ</strong>
                                        </Col>
                                        <Col md={6}>
                                            <div>Loại sản phẩm: {item.loai_sp}</div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 mt-1">
                                        <Col md={6}>
                                            <div>Tiêu chuẩn: {item.tieu_chuan ?? 'N/A'}</div>
                                        </Col>
                                        <Col md={6}>
                                            <div>Khối lượng: {item.khoi_luong} gram</div>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Mô tả sản phẩm: {item.ghi_chu ?? 'N/A'}
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
    item: PropTypes.object,
 };

export default SearchResultItem;