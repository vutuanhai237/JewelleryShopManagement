import React from 'react';
import Attendance from '../../images/attendance-48.png';
import IconList from '../../images/list-48.png';
import Customer from '../../images/customer.png';
import CustomerSupport from '../../images/customer-support.png';
import CatNav from '../CatNav';
import PropTypes from 'prop-types';

const PeopleNav = (props) => {

    const items = [
        {
            id: 0,
            img: IconList,
            label: 'Danh sách nhân viên',
            href: "/people/employee-list",
        },
        {
            id: 1,
            img: Attendance,
            label: 'Điểm danh nhân viên',
            href: "/people/dd",
        },
        {
            id: 2,
            img: Customer,
            label: 'Danh sách khách hàng',
            href: "/employee/customer",
        },
        {
            id: 3,
            img: CustomerSupport,
            label: 'Chăm sóc khách hàng',
            href: "/people/customer-care",
        },

    ];

    return (
        <CatNav catItems={items} className={props.className} />
    );

}

PeopleNav.propTypes = {
    className: PropTypes.string,
}

export default PeopleNav;