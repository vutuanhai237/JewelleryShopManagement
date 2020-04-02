import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import ProductList from '../../components/home/ProductList';
import fetchHomeProducts from '../../services/fetchHomeProducts';



class HotProductList extends Component {
    componentDidMount() {
        const { fetchProduct } = this.props;
        fetchProduct();
    }
    render() {
        const { category, products } = this.props;
        return (
            <>
                <h4>Sản phẩm đang bán chạy</h4>
                <ProductList productList={products} catId={category} />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.home.category,
        products: state.home.products,
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProduct: fetchHomeProducts,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotProductList));