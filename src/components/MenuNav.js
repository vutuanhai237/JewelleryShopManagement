import React, { Component } from 'react';
import { Navbar, Container, NavLink} from 'react-bootstrap';
import './TopNav.scss';


export const menuItem = ["Trang chủ", "Vàng bạc", "Trang sức", "Liên hệ"];

class MenuNav extends Component {
    render() {
        return (
            <div className="top-nav d-none d-md-block">
                <Navbar className="bg-trans" variant="light">
                    <Container>
                        <ul className="list-inline list-unstyled">
                            {
                                menuItem.map(item => {
                                    return <li key={item} className="list-inline-item text-uppercase"><NavLink>{item}</NavLink></li>
                                })
                            }
                        </ul>
                    </Container>

                </Navbar>
            </div>
        );
    }
}

export default MenuNav;