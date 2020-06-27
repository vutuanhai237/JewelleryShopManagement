import React from "react";
import { Form, Col, Spinner, Row, FormControl, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeSelectedProduct } from '../../actions/productAction';
import { fetchProducts, addProduct, deleteProduct, editProduct } from '../../services/productApi';
import ProductList from "../../components/product-list/ProductList";
import ProductDetail from "../../components/product-list/ProductDetail";
import Pagination from "../../components/Pagination";
import AddProductPopup from "../../components/product-list/AddProductPopup";
import EditProductPopup from "../../components/product-list/EditProductPopup";

const ITEMS_PER_PAGE = 5;

function createFilter({ search, page, itemPerPage }) {
    return {
        ten_sp: search ?? '',
        loai_sp: '',
        from: ((page ?? 1) - 1) * itemPerPage,
        so_luong: itemPerPage,
    }
}

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            showAddPopup: false,
            showEditPopup: false,
        }
        this.showAddProductPopup = this.showAddProductPopup.bind(this);
        this.showEditProductPopup = this.showEditProductPopup.bind(this);
    }

    componentDidMount() {
        console.log('mo');
        const { search, page } = this.props;
        this.props.fetchProducts(createFilter({
            search,
            page,
            itemPerPage: ITEMS_PER_PAGE
        }));
    }

    showAddProductPopup(v) {
        return this.setState({
            showAddPopup: v
        })
    }

    showEditProductPopup(v) {
        return this.setState({
            showEditPopup: v
        })
    }

    render() {
        const {
            products,
            loading,
            selected,
            changeSelectedProduct,
            page,
            history,
            search,
            addProduct,
            deleteProduct,
            count,
            changed,
            editProduct,
        } = this.props;

        const filter = createFilter({
            search,
            page,
            itemPerPage: ITEMS_PER_PAGE
        });

        if (changed) {
            history.push({
                pathname: "/warehouse/product-list",
                search: search ? `?q=${search}&page=1` : `?page=1`,
            })
        }

        if(products && products.length > 0 && !selected) {
            changeSelectedProduct(products[0]);
        }

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
                                            + Thêm sản phẩm
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8} xs={12}>
                                        <ProductList data={products} onSelectItem={(item) => changeSelectedProduct(item)} handleDelete={(item) => deleteProduct(item.idsp)} />
                                        <Pagination max={parseInt(Math.ceil(count / ITEMS_PER_PAGE))} current={page ? parseInt(page) : undefined} onChange={(p) => {
                                            return history.push({
                                                pathname: "/warehouse/product-list",
                                                search: search ? `?q=${search}&page=${p}` : `?page=${p}`,
                                            })
                                        }} />
                                        {/* <DeliveryForm /> */}
                                    </Col>
                                    <Col sm={4} xs={12}>
                                        <ProductDetail onEdit={() => this.showEditProductPopup(true)} item={selected} />
                                        {/*<PurchaseForm /> */}
                                    </Col>
                                </Row>
                            </>
                    }
                </div>
                <AddProductPopup
                    show={this.state.showAddPopup}
                    onHide={() => this.showAddProductPopup(false)}
                    onSubmit={(s) => addProduct(s)}
                />
                <EditProductPopup
                    item={selected}
                    show={this.state.showEditPopup}
                    onHide={() => this.showEditProductPopup(false)}
                    onSubmit={(s) => editProduct(s, selected.idsp)} />
            </div>

        );
    }
}

const mapStatetoProps = (state) => {
    return {
        products: state.product.products,
        loading: state.product.loading,
        selected: state.product.selected,
        count: state.product.count,
        changed: state.product.changed,
        //loading: true,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchProducts,
    changeSelectedProduct,
    addProduct,
    deleteProduct,
    editProduct,
}, dispatch);

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Products));