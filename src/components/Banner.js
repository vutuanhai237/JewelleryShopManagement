import React, { Component } from 'react';
import { Button, Container, Jumbotron, Row, Col } from 'react-bootstrap';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <Jumbotron className="bg-trans mb-0">
                    <Container>
                        <Row className="pt-0 pb-5 py-md-5">
                            <Col md={4}>
                                <h1>Mua vàng theo cách của bạn!</h1>
                                <p>
                                    Hãy đến với Vàng Store để được phục vụ tốt nhất.
                                </p>
                                <p>
                                    <Button variant="primary">Tìm hiểu thêm</Button>
                                </p>
                            </Col>
                        </Row>

                    </Container>

                </Jumbotron>
                <div className="model"></div>
            </div>
        );
    }
}

export default Banner;