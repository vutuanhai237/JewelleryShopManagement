import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Container, NavLink, InputGroup } from 'react-bootstrap';
import './TopNav.scss';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand><img src="https://img.icons8.com/ultraviolet/40/000000/jewelry.png" alt="logo" /></Navbar.Brand>
                        <Navbar.Brand href="#home" className="brand-name mx-lg-3" >Vàng Store</Navbar.Brand>

                        <Form inline className="flex-grow-1">
                            <div className="search-bar w-100 mx-lg-5">
                                <InputGroup>
                                    <FormControl type="text" placeholder="Bạn muốn mặt hàng nào?" />
                                    <div class="input-group-append">
                                        <Button variant="light" type="button"><FontAwesomeIcon icon={faSearch} /></Button>
                                    </div>
                                </InputGroup>
                            </div>


                        </Form>
                        <div className=" d-flex">
                            <NavLink className="mx-lg-3">Đăng nhập</NavLink>
                            <Button variant="outline-primary">Liên hệ</Button>
                        </div>

                    </Container>

                </Navbar>
            </div>
        );
    }

}

export default TopNav;