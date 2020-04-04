import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CatNav.scss';

class CatNavItem extends Component {
    render() {
        var navLinkClass = "d-flex flex-fill";
        if (this.props.active)
            navLinkClass += " active";
        return (
            <Nav.Item className="d-flex flex-fill align-self-stretch">
                <Nav.Link className={navLinkClass} onClick={this.props.onClick} href={this.props.href}>
                    <div className="cat-item m-auto">
                        <img src={this.props.img} alt={this.props.children} />
                        <div className="cat-label .text-center">{this.props.children}</div>
                    </div>
                </Nav.Link>
            </Nav.Item>
        );
    }
}

CatNavItem.propTypes = {
    img: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func,
}


export default CatNavItem;