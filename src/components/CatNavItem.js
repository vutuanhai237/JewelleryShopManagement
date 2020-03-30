import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CatNav.scss';

class CatNavItem extends Component {
    render() {
        return (
            <Nav.Item className="px-md-5">
                <Nav.Link href={this.props.href}>
                    <img src={this.props.img} alt={this.props.children} />
                    <div className="cat-label .text-center">{this.props.children}</div>
                </Nav.Link>
            </Nav.Item>
        );
    }
}

CatNavItem.propTypes = {
    img: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}


export default CatNavItem;