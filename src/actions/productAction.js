import { 
    PRODUCTS_FETCH_LIST_SUCCESS, 
    PRODUCTS_FETCH_LIST_LOADING,
    PRODUCTS_CHANGE_SELECTED_PRODUCT
} from '../constants';

export function fetchProductListSuccess(products) {
    return {
        type: PRODUCTS_FETCH_LIST_SUCCESS,
        payload: products
    }
}

export function fetchProductListLoading() {
    return {
        type: PRODUCTS_FETCH_LIST_LOADING,
    }
}

export function changeSelectedProduct(product) {
    return {
        type: PRODUCTS_CHANGE_SELECTED_PRODUCT,
        payload: product,
    }
}