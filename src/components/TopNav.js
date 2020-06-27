import React, { Component } from "react";
import {
	Navbar,
	Nav,
	Button,
	Container,
	NavLink,
	Dropdown,
} from "react-bootstrap";
import "./TopNav.scss";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuItem } from "./MenuNav";
import iconLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import axios from "axios";

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: false,
			info: null,
		}
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		this.fetchLoginState();
	}

	logout() {
		var config = {
			method: 'get',
			url: `http://chvbdq.herokuapp.com:80/logout`,
			headers: {
				'Authorization': "Bearer " + sessionStorage.getItem('token')
			}
		};
		console.log(config);
		axios(config)
			.then(response => {
				this.setState({
					login: false,
				});
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("id_nv");
				sessionStorage.removeItem("ho_ten");
			})
			.catch(error => {
				console.log(error);
			});

	}

	fetchLoginState() {
		var token = sessionStorage.getItem("token");
		if (token) {
			this.setState({
				login: true,
			})
		}
		var config = {
			method: 'get',
			url: `http://chvbdq.herokuapp.com:80/nhanvien/canhan`,
			headers: {
				'Authorization': "Bearer " + sessionStorage.getItem('token')
			}
		};
		console.log(config);
		axios(config)
			.then(response => {
				if (response.data)
					this.setState({
						info: response.data
					});
			})
			.catch(error => {
				console.log(error);
			});
	}

	loginSection() {
		if (!this.state.login) {
			return (
				<>
					<Link className="nav-link mx-lg-3 d-none d-md-block" to="/login">
						Đăng nhập
        </Link>
					<Button variant="primary" className="d-none d-md-block">
						<FontAwesomeIcon icon={faPhoneAlt} />
						<span className="ml-2 text-uppercase">Liên hệ</span>
					</Button>
				</>
			);
		} else {
			return (
				<Dropdown>
					<Dropdown.Toggle size="sm" variant="dark" id="dropdown-basic">
						{this.state.info?.ho_ten ?? sessionStorage.getItem("ho_ten")}
        </Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="/warehouse/product-list">Sản phẩm</Dropdown.Item>
						<Dropdown.Item href="/people/employee-list">Nhân viên</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item onClick={this.logout}>Đăng xuất</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			);
		}
	}

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
							{this.loginSection()}

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
