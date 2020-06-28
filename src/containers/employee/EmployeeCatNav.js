import React, { Component } from 'react';
import iconService from '../../images/service.png';
import iconBill from '../../images/bill.png';
import iconCustomer from '../../images/customer.png';
import iconBuy_Hold from '../../images/buy_hold.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { changeCategoryAction } from '../../actions/employeeAction';
import CatNav from '../../components/CatNav';

class EmployeeCatNav extends Component {

    render() {
        const { changeCategory, category } = this.props;
        const items = [
            {
                id: 0,
                img: iconBill,
                label: 'Hóa đơn',
                onClick: () => changeCategory(0),
                href: "/employee/invoice",
                active: category === 0,
            },
            {
                id: 1,
                img: iconService,
                label: 'Dịch vụ',
                onClick: () => changeCategory(1),
                href: "/employee/service",
                active: category === 1,
            },
            {
                id: 2,
                img: iconCustomer,
                label: 'Khách hàng',
                onClick: () => changeCategory(2),
                href: "/employee/customer",
                active: category === 2,
            },
            {
                id: 3,
                img: iconBuy_Hold,
                label: 'Mua/cầm đồ',
                onClick: () => changeCategory(3),
                href: "/employee/rent",
                active: category === 3,
            },
        ];

        return (
            <CatNav className={this.props.className} catItems={items} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.employee.category,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeCategory: (cat_id) => {
        return changeCategoryAction(cat_id);
    },
}, dispatch);



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeCatNav));