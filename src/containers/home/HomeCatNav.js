import React, { Component } from 'react';
import iconVang from '../../images/vang.png';
import iconBac from '../../images/bac.png';
import iconDaQuy from '../../images/da-quy.png';
import iconTrangSuc from '../../images/trang-suc.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { changeCategoryAction } from '../../actions/homeAction';
import CatNav from '../../components/CatNav';

class HomeCatNav extends Component {

    render() {
        const { changeCategory, category } = this.props;
        const items = [
            {
                id: 0,
                img: iconVang,
                label: 'Vàng',
                onClick: () => changeCategory(0),
                href: "#",
                active: category === 0,
            },
            {
                id: 1,
                img: iconTrangSuc,
                label: 'Trang sức',
                onClick: () => changeCategory(1),
                href: "#",
                active: category === 1,
            },
            {
                id: 2,
                img: iconBac,
                label: 'Bạc',
                onClick: () => changeCategory(2),
                href: "#",
                active: category === 2,
            },
            {
                id: 3,
                img: iconDaQuy,
                label: 'Đá quý',
                onClick: () => changeCategory(3),
                href: "#",
                active: category === 3,
            },
        ];

        return (
            <CatNav catItems={items} />
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeCatNav));