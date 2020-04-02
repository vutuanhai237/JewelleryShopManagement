import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import './ProductList.scss';
import PropTypes from 'prop-types';



class ProductList extends Component {
    render() {
        const { productList, catId } = this.props;
        if (!productList)
            return (<div>Không có sản phẩm nào!</div>)
        return (

            <div className="product-list">
                <Row>
                    {
                        productList.filter(x => x.catId === catId).map(item => {
                            return <ProductItem key={productList.indexOf(item)} img={item.img} label={item.name} />
                        })
                    }
                </Row>

            </div>
        );
    }
}

ProductList.propTypes = {
    catId: PropTypes.number.isRequired,
    productList: PropTypes.array,
}

export default ProductList;