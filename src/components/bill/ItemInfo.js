import React from "react";
import { Form, Dropdown, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';

class ItemInfo extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.itemName}</td>
                <td><Form.Control plaintext defaultValue={this.props.itemNumber}/></td>
                <td>{this.props.itemPrice}</td>
            </tr>
        );
    }
}

ItemInfo.propTypes = {
    itemId: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    itemNumber: PropTypes.number.isRequired,
    itemPrice: PropTypes.number.isRequired,
}
export default ItemInfo;