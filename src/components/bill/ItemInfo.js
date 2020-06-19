import React from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss"
class ItemInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 1 
        };
    }
    changeQuantity(evt) {
        if (evt.target.value >= 0 && evt.target.value !== "")  {
            this.setState({
                number: evt.target.value
            });
        }      
        else {
            this.setState({
                number: 1
            });
        }
        console.log(this.props.item.itemID, evt.target.value);
        this.props.changeItemTemptList(this.props.item.itemID, evt.target.value);
        this.forceUpdate();
    }
    deleteItem() {
        this.props.deleteAction();
    }
    render() {
        return (
            <tr className="item-info">
                <td>{this.props.item.name}</td>
                <td><Form.Control disabled={this.props.disableItemList} plaintext onChange={evt => this.changeQuantity(evt)} value={this.state.number} /></td>
                <td>{this.props.item.prices}</td>
                <td><Button disabled={this.props.disableItemList} keyid="btn-delete" variant="danger" onClick={this.deleteItem.bind(this)}>x</Button></td>
            </tr>
        );
    }
}


const mapStatetoProps = (state) => {
    return {
        disableItemList: state.employee.disableItemList,

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeItemTemptList: (itemID, quantity) => dispatch({ type: "EMPLOYEE_CHANGE_ITEMTEMPTLIST", itemID: itemID, quantity: quantity })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ItemInfo));
