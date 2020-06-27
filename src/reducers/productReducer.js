import {
    PRODUCTS_FETCH_LIST_LOADING,
    PRODUCTS_FETCH_LIST_SUCCESS,
    PRODUCTS_CHANGE_SELECTED_PRODUCT,
    PRODUCTS_LIST_CHANGED,
} from '../constants';

const initialState = {
    loading: true,
    products: [],
    selected: null,
    count: 0,
    changed: false,
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_FETCH_LIST_LOADING:
            return {
                ...state,
                loading: true,
                changed: false,
            }
        case PRODUCTS_FETCH_LIST_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                count: action.payload.count,
                loading: false,
                changed: false,
            }
        case PRODUCTS_CHANGE_SELECTED_PRODUCT:
            return {
                ...state,
                selected: action.payload,
            }
        case PRODUCTS_LIST_CHANGED:
            return {
                ...state,
                changed: true,
            }
        default:
            return initialState;
    }
}

export default productReducer;