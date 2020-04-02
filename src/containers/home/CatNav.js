import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';
import iconVang from '../../images/vang.png';
import iconBac from '../../images/bac.png';
import iconDaQuy from '../../images/da-quy.png';
import iconTrangSuc from '../../images/trang-suc.png';
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
                <Nav className="cat-nav w-100" activeKey="/home">
                    <CatNavItem active={category === 0} href="#" onClick={() => changeCategory(0)} img={iconVang}>Vàng</CatNavItem>
                    <CatNavItem active={category === 1} href="#" onClick={() => changeCategory(1)} img={iconTrangSuc}>Trang sức</CatNavItem>
                    <CatNavItem active={category === 2} href="#" onClick={() => changeCategory(2)} img={iconBac}>Bạc</CatNavItem>
                    <CatNavItem active={category === 3} href="#" onClick={() => changeCategory(3)} img={iconDaQuy}>Đá quý</CatNavItem>
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