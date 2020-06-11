import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const ProductListItem = (props) => {
    const {
        idsp,
        ten_sp,
        nhacc_id,
    } = props.item;
    return (
        <tr className="item-info" onClick={props.onSelectItem} style={{cursor: "pointer"}}>
            <td>{idsp}</td>
            <td>{ten_sp}</td>
            <td>{nhacc_id}</td>
            <td><Button keyid="btn-delete" variant="danger" onClick={props.handleDelete}>x</Button></td>
        </tr>
    );
}

ProductListItem.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    onSelectItem: PropTypes.func,
}

ProductListItem.defaultProps = {
    onSelectItem: () => {}
}


export default ProductListItem;

