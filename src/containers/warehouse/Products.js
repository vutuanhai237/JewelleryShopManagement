import React from "react";
import { Form, Col, Spinner, Row, FormControl, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeSelectedProduct } from '../../actions/productAction';
import { fetchProducts } from '../../services/productApi';
import ProductList from "../../components/product-list/ProductList";
import ProductDetail from "../../components/product-list/ProductDetail";
import Pagination from "../../components/Pagination";
import AddProductPopup from "../../components/product-list/AddProductPopup";


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            showAddPopup: false,
        }
        this.showAddProductPopup = this.showAddProductPopup.bind(this);
    }

    componentDidMount() {
        const { search } = this.props;
        const filter = {
            ten_sp: search ?? '',
            loai_sp: '',
            from: 0,
            so_luong: 2,
        }
        this.props.fetchProducts(filter);
    }

    showAddProductPopup(v) {
        return this.setState({
            showAddPopup: v
        })
    }

    render() {
        console.log(this.props);
        const { products, loading, selected, changeSelectedProduct, page, history, search } = this.props;
        return (

            <div>

                <div className="bill-form">

                    {
                        loading ?
                            <div className="d-flex justify-content-center w-100">
                                <Spinner animation="grow" variant="danger" className="d-flexmy-2" />
                            </div>
                            :
                            <>
                                <Row>
                                    <Col sm={12} md={4}>
                                        <Form method="GET" action="/warehouse/product-list">
                                            <FormControl type="text" name="q" placeholder="Tìm kiếm sản phẩm..." className="ml-md-4" defaultValue={search} />
                                        </Form>
                                    </Col>
                                    <Col sm={12} md={8} className="d-flex">
                                        <Button className="ml-auto" variant="primary" onClick={() => this.showAddProductPopup(true)}>
                                            Add Product
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8} xs={12}>
                                        <ProductList data={products} onSelectItem={(item) => changeSelectedProduct(item)} />
                                        <Pagination max={4} current={page ? parseInt(page) : undefined} onChange={(p) => {
                                            return history.push({
                                                pathname: "/warehouse/product-list",
                                                search: search ? `?q=${search}&page=${p}` : `?page=${p}`,
                                            })
                                        }} />
                                        {/* <DeliveryForm /> */}
                                    </Col>
                                    <Col sm={4} xs={12}>
                                        <ProductDetail item={selected ?? products[0]} />
                                        {/*<PurchaseForm /> */}
                                    </Col>
                                </Row>
                            </>
                    }
                </div>
                <AddProductPopup show={this.state.showAddPopup} onHide={() => this.showAddProductPopup(false)} />
            </div>

        );
    }
}

const mapStatetoProps = (state) => {
    return {
        products: state.product.products,
        loading: state.product.loading,
        selected: state.product.selected,
        //loading: true,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchProducts,
    changeSelectedProduct,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Products));