import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';
import iconService from '../../images/service.png';
import iconBill from '../../images/bill.png';
import iconCustomer from '../../images/customer.png';
import iconBuy_Hold from '../../images/buy_hold.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { changeCategoryAction } from '../../actions/homeAction';
import CatNavItem from '../../components/home/CatNavItem';

class CatNav extends Component {

    render() {
        const { changeCategory, category } = this.props;
        return (
            <Container className="d-flex justify-content-center">
                <Nav className="cat-nav w-100" activeKey="/employee">
                    <CatNavItem active={category === 0} href="#" onClick={() => changeCategory(0)} img={iconBill}>Thêm hóa đơn</CatNavItem>
                    <CatNavItem active={category === 1} href="#" onClick={() => changeCategory(1)} img={iconService}>Thêm phiếu dịch vụ</CatNavItem>
                    <CatNavItem active={category === 2} href="#" onClick={() => changeCategory(2)} img={iconCustomer}>Thêm khách hàng</CatNavItem>
                    <CatNavItem active={category === 3} href="#" onClick={() => changeCategory(3)} img={iconBuy_Hold}>Mua / cầm đồ</CatNavItem>
                </Nav>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.home.category,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeCategory: (cat_id) => {
        return changeCategoryAction(cat_id);
    },
}, dispatch);



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatNav));