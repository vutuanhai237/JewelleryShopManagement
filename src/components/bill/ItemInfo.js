import React from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss"
class ItemInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            so_luong: 1 
        };
    }
    changeQuantity(evt) {
        if (evt.target.value >= 0 && evt.target.value !== "")  {
            this.setState({
                so_luong: evt.target.value
            });
        }      
        else {
            this.setState({
                so_luong: 1
            });
        }
        this.props.changeItemTemptList(this.props.product.idsp,evt.target.value);
    }
    deleteItem() {
        this.props.deleteAction();
    }
    render() {
        const { product } = this.props;
        return (
            <tr className="item-info">
                <td>{product.ten_sp}</td>
                <td><Form.Control disabled={this.props.disableItemList} plaintext onChange={evt => this.changeQuantity(evt)} value={this.state.so_luong} /></td>
                <td>{product.gia_ban}</td>
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
        changeItemTemptList: (idsp, so_luong) => dispatch({ type: "EMPLOYEE_CHANGE_ITEMTEMPTLIST", idsp: idsp, so_luong: so_luong })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ItemInfo));
