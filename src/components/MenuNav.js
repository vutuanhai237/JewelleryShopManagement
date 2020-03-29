import React, { Component } from 'react';
import { Navbar, Container, NavLink} from 'react-bootstrap';
import './TopNav.scss';


const menuItem = ["Trang chủ", "Vàng bạc", "Trang sức", "Liên hệ"];

class MenuNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <Navbar bg="light" variant="light">
                    <Container>
                        <ul className="list-inline list-unstyled">
                            {
                                menuItem.map(item => {
                                    console.log(item);
                                    return <li className="list-inline-item text-uppercase"><NavLink>{item}</NavLink></li>
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