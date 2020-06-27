import React from 'react';
import { Table } from 'react-bootstrap';
import ProductListItem from './ProductListItem';
import PropTypes from 'prop-types';

const ProductList = (props) => {
    const { data, handleDelete, onSelectItem } = props;
    return (
        <div className="item-info-list">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá bán</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return <ProductListItem
                                key={item.idsp}
                                handleDelete={() => handleDelete(item)}
                                item={item}
                                onSelectItem={() => onSelectItem(item)}
                            />
                        })
                    }
                </tbody>
            </Table>
            {
                data.length < 1 &&
                <p className="text-center">Không tìm thấy sản phẩm</p>
            }
        </div >
    );
}

ProductList.defaultProps = {
    data: [],
    loading: true,
    onSelectItem: () => { }
}

ProductList.propTypes = {
    handleDelete: PropTypes.func,
    data: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func,
}

export default ProductList;