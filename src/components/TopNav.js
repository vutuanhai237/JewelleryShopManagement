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
import { HOST, PORT } from '../constants'

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: false,
			info: null,
			loai_tk: null,
		}
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		this.fetchLoginState();
		this.fetchCurrentAccount();
	}

	logout() {
		var config = {
			method: 'get',
			url: `https://${HOST}:${PORT}/logout`,
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
				console.log(this.props);
				this.props.history.push({
					pathname: "/login",
				})
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
		} else {
			return;
		}
		var config = {
			method: 'get',
			url: `https://${HOST}:${PORT}/nhanvien/canhan`,
			headers: {
				'Authorization': "Bearer " + sessionStorage.getItem('token')
			}
		};
		axios(config)
			.then(response => {
				if (response.data)
					this.setState({
						info: response.data
					});

			})
			.catch(error => {
				if (error.response && error.response.status === 401) {
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("id_nv");
					sessionStorage.removeItem("ho_ten");
					alert("Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại!");
					this.props.history.push({
						pathname: "/login",
					})
				}
				console.log(error);
			});
	}

	fetchCurrentAccount() {
		var config = {
			method: 'get',
			url: `https://${HOST}:${PORT}/taikhoan/canhan`,
			headers: {
				'Authorization': "Bearer " + sessionStorage.getItem('token')
			}
		};
		axios(config)
			.then(response => {
				if (response.data)
					this.setState({
						loai_tk: parseInt(response.data.loai_tk),
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
				<Dropdown className="d-none d-md-block">
					<Dropdown.Toggle size="sm" variant="dark" id="dropdown-basic">
						{this.state.info?.ho_ten ?? sessionStorage.getItem("ho_ten")}
					</Dropdown.Toggle>



					<Dropdown.Menu>
						{
							this.state.loai_tk &&
							<>
								{
									(this.state.loai_tk === 1 || this.state.loai_tk === 4) &&
									<Dropdown.Item href="/employee/invoice">Phiếu bán hàng</Dropdown.Item>
								}

								{
									(this.state.loai_tk === 2 || this.state.loai_tk === 4) &&
									<Dropdown.Item href="/warehouse/product-list">Sản phẩm</Dropdown.Item>
								}

								{
									(this.state.loai_tk === 1 || this.state.loai_tk === 3 || this.state.loai_tk === 4) &&
									<Dropdown.Item href="/employee/customer">Quản lý khách hàng</Dropdown.Item>
								}

								{
									(this.state.loai_tk === 3 || this.state.loai_tk === 4) &&
									<Dropdown.Item href="/people/employee-list">Quản lý nhân viên</Dropdown.Item>
								}

								<Dropdown.Divider />
							</>
						}
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
										{
											!this.state.login ?
												<li className="text-uppercase">
													<NavLink href="/login">Đăng nhập</NavLink>
												</li>
												:
												<>
													<li className="text-uppercase">
														<NavLink href="/employee/invoice">Phiếu bán hàng</NavLink>
													</li>
													<li className="text-uppercase">
														<NavLink href="/warehouse/product-list">Sản phẩm</NavLink>
													</li>
													<li className="text-uppercase">
														<NavLink href="/employee/customer">Quản lý khách hàng</NavLink>
													</li>
													<li className="text-uppercase">
														<NavLink href="/people/employee-list">Quản lý nhân viên</NavLink>
													</li>
													<li className="text-uppercase">
														<NavLink onClick={this.logout}>Đăng xuất</NavLink>
													</li>
												</>
										}

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
