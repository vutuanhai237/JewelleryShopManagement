import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const EmployeeListItem = (props) => {
    const {
        ho_ten,
        ngay_sinh,
        sdt,
    } = props.item;
    return (
        <tr className="item-info" onClick={props.onSelectItem} style={{ cursor: "pointer" }}>
            <td>{ho_ten}</td>
            <td>
                <Moment format="DD/MM/YYYY">
                    {ngay_sinh}
                </Moment>
            </td>
            <td>{sdt}</td>
            <td><Button keyid="btn-delete" variant="danger" onClick={props.handleDelete}>Xóa</Button></td>
        </tr>
    );
}

EmployeeListItem.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    onSelectItem: PropTypes.func,
}

EmployeeListItem.defaultProps = {
    onSelectItem: () => { }
}


export default EmployeeListItem;

