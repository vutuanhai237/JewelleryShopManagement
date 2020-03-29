import React, { Component } from 'react';
import { Button, Container, Jumbotron, Row, Col } from 'react-bootstrap';

class Banner extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="bg-light">
                    <Container>
                        <Row>
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
            </div>
        );
    }
}

export default Banner;