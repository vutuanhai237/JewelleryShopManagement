import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  NavLink,
} from "react-bootstrap";
import "./TopNav.scss";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuItem } from "./MenuNav";
import iconLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <Navbar className="bg-trans" expand="lg">
          <Container>
            <Navbar.Brand>
              <img src={iconLogo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Brand className="brand-name mx-lg-3">
              <Link to="/">Vàng Store</Link>
            </Navbar.Brand>

            <SearchBar noBorder placeholder='Bạn muốn mặt hàng nào' paramName='keyword' action='/search' className='d-none flex-grow-1 d-md-flex mx-lg-5' />

            <div className="d-flex">
              <Navbar.Toggle
                variant="primary"
                className="d-block d-md-none"
                aria-controls="basic-navbar-nav"
              />
              <Link className="nav-link mx-lg-3 d-none d-md-block" to="/login">
                Đăng nhập
              </Link>
              <Button variant="primary" className="d-none d-md-block">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className="ml-2 text-uppercase">Liên hệ</span>
              </Button>
            </div>

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-md-none flex-grow-0"
            >
              <div className="mx-3">
                <Nav className="mr-auto d-md-none">
                  <ul className="list-unstyled">
                    {menuItem.map(item => {
                      return (
                        <li key={item} className="text-uppercase">
                          <NavLink>{item}</NavLink>
                        </li>
                      );
                    })}
                    <li className="text-uppercase">
                      <NavLink>Đăng nhập</NavLink>
                    </li>
                  </ul>
                </Nav>
                <SearchBar noBorder placeholder='Bạn muốn mặt hàng nào' paramName='keyword' action='/search' className='d-md-none' />

              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
