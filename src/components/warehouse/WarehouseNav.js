import React from 'react';
import IconWarehouse from '../../images/warehouse-48.png';
import IconList from '../../images/list-48.png';
import IconImport from '../../images/import-48.png';
import IconExport from '../../images/export-48.png';
import CatNav from '../../components/CatNav';
import PropTypes from 'prop-types';

const WarehouseNav = (props) => {

        const items = [
            {
                id: 0,
                img: IconList,
                label: 'Danh sách',
                href: "/warehouse/product-list",
            },
            {
                id: 1,
                img: IconImport,
                label: 'Nhập kho',
                href: "/warehouse/import",
            },
            {
                id: 2,
                img: IconExport,
                label: 'Xuất kho',
                href: "/warehouse/export",
            },
            {
                id: 3,
                img: IconWarehouse,
                label: 'Tồn kho',
                href: "/warehouse/inventory",
            },
        ];

        return (
            <CatNav catItems={items} className={props.className}/>
        );

}

WarehouseNav.propTypes = {
    className: PropTypes.string,
}

export default WarehouseNav;