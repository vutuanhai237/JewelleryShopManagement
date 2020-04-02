import React, { Component } from 'react';
import { Navbar, Form, Nav, FormControl, Button, Container, NavLink, InputGroup } from 'react-bootstrap';
import './TopNav.scss';
import { faSearch, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuItem } from './MenuNav';
import iconLogo from '../images/logo.png';
import { Link } from "react-router-dom";

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <Navbar className="bg-trans" expand="lg">
                    <Container>
                        <Navbar.Brand><img src={iconLogo} alt="logo" /></Navbar.Brand>
                        <Navbar.Brand className="brand-name mx-lg-3"><Link to="/">Vàng Store</Link></Navbar.Brand>

                        <Form inline className="d-none flex-grow-1 d-md-flex">
                            <div className="search-bar w-100 mx-lg-5">
                                <InputGroup>
                                    <FormControl type="text" placeholder="Bạn muốn mặt hàng nào?" />
                                    <div className="input-group-append">
                                        <Button variant="light" type="button"><FontAwesomeIcon icon={faSearch} /></Button>
                                    </div>
                                </InputGroup>
                            </div>
                        </Form>

                        <div className="d-flex">
                            <Navbar.Toggle variant="primary" className="d-block d-md-none" aria-controls="basic-navbar-nav" />
                            <Link className="nav-link mx-lg-3 d-none d-md-block" to="/login">Đăng nhập</Link>
                            <Button variant="primary" className="d-none d-md-block">
                                <FontAwesomeIcon icon={faPhoneAlt} /><span className="ml-2 text-uppercase">Liên hệ</span>
                            </Button>
                        </div>

                        <Navbar.Collapse id="basic-navbar-nav" className="d-md-none flex-grow-0">
                            <div className="mx-3">
                                <Nav className="mr-auto d-md-none">
                                    <ul className="list-unstyled">
                                        {
                                            menuItem.map(item => {
                                                return <li key={item} className="text-uppercase"><NavLink>{item}</NavLink></li>
                                            })
                                        }
                                        <li className="text-uppercase"><NavLink>Đăng nhập</NavLink></li>
                                    </ul>

                                </Nav>
                                <Form inline className="d-md-none">
                                    <div className="search-bar w-100">
                                        <InputGroup>
                                            <FormControl type="text" placeholder="Bạn muốn mặt hàng nào?" />
                                            <div className="input-group-append">
                                                <Button variant="light" type="button"><FontAwesomeIcon icon={faSearch} /></Button>
                                            </div>
                                        </InputGroup>
                                    </div>
                                </Form>
                            </div>


                        </Navbar.Collapse>



                    </Container>

                </Navbar>
            </div >

        );
    }

}

export default TopNav;