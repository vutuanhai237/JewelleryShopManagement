import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './CatNav.scss';
import CatNavItem from './CatNavItem';

class CatNav extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <Nav className="cat-nav" activeKey="/home">
                    <CatNavItem href="/" img="https://img.icons8.com/color/48/000000/gold-bars.png">Vàng</CatNavItem> 
                    <CatNavItem href="/" img="https://img.icons8.com/color/48/000000/diamond-ring.png">Trang sức</CatNavItem>
                    <CatNavItem href="/" img="https://img.icons8.com/color/48/000000/silver-bars.png">Bạc</CatNavItem>
                    <CatNavItem href="/" img="https://img.icons8.com/color/48/000000/ruby-gemstone.png">Đá quý</CatNavItem>
                </Nav>
            </div>
        );
    }
}

export default CatNav;