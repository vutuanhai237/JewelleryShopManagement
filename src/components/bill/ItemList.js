import React, { Component } from 'react';
import { Row, Table } from 'react-bootstrap';
import ItemInfo from "./ItemInfo"
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import "./form.scss"

class ItemList extends Component {

    deleteItem(itemID) {
        
        this.props.deleteItemTemptList(itemID);
        this.forceUpdate();
    }
    render() {
        const {itemTemptList} = this.props;
        return (
            <div className="item-info-list">
                <Row>
                    <Table responsive unbordered>
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                itemTemptList.map(item => {
                                    return <ItemInfo deleteAction={()=> this.deleteItem(item.itemID)} item = {item}/>           
                                })
                            }
                        </tbody>
                    </Table>
                </Row>



            </div>
        );


    }
}

const mapStatetoProps = (state) => {
    return {
        itemTemptList: state.employee.itemTemptList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItemTemptList: (itemID) => dispatch({ type: "EMPLOYEEDELETEITEMTEMPTLIST", itemID: itemID})
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(ItemList));
