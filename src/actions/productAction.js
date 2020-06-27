import { 
    PRODUCTS_FETCH_LIST_SUCCESS, 
    PRODUCTS_FETCH_LIST_LOADING,
    PRODUCTS_CHANGE_SELECTED_PRODUCT,
    PRODUCTS_ADD_PRODUCT_SUCCESS,
    PRODUCTS_LIST_CHANGED
} from '../constants';

export function fetchProductListSuccess(products, count) {
    return {
        type: PRODUCTS_FETCH_LIST_SUCCESS,
        payload: {
            products,
            count,
        }
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

export function addProductSuccess() {
    return {
        type: PRODUCTS_LIST_CHANGED,
    }
}

export function editProductSuccess() {
    return {
        type: PRODUCTS_LIST_CHANGED,
    }
}

export function deleteProductSuccess() {
    return {
        type: PRODUCTS_LIST_CHANGED,
    }
}