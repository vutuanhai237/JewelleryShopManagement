import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'react-bootstrap';

class ProductItem extends Component {
    render() {
        return (
            <Card className="col-md-6 col-lg-4 col-xl-3">
                <div className="img-box"><CardImg variant="top" className="img-fluid h-100" src={this.props.img} /></div>
                <Card.Body>
                    <Card.Title>{this.props.label}</Card.Title>
                </Card.Body>

            </Card>
        );
    }
}

ProductItem.propTypes = {
    img: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default ProductItem;