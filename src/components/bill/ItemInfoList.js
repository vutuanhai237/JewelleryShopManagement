import React, { Component } from 'react';
import { Row, Table, Col } from 'react-bootstrap';
import ItemInfo from './ItemInfo';
import PropTypes from 'prop-types';
import "./form.scss"


class ItemInfoList extends Component {
    render() {
        const { itemList } = this.props;
        if (!itemList)
            return (<div>Không có sản phẩm nào!</div>)
        return (
            <div className="item-info-list">
                <Row>
                    <Table responsive unbordered>
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                itemList.map(item => {
                                    return (
                                        <ItemInfo key={itemList.indexOf(item)} itemName={item.itemName} itemNumber={item.itemNumber} itemPrice={item.itemPrice} />
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>



            </div>
        );
    }
}

ItemInfoList.propTypes = {
    itemList: PropTypes.array,
}

export default ItemInfoList;