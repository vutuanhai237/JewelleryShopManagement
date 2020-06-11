import {
    PRODUCTS_FETCH_LIST_LOADING,
    PRODUCTS_FETCH_LIST_SUCCESS,
    PRODUCTS_CHANGE_SELECTED_PRODUCT
} from '../constants';

const initialState = {
    loading: true,
    products: [],
    selected: null,
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_FETCH_LIST_LOADING:
            return {
                ...state,
                loading: true,
            }
        case PRODUCTS_FETCH_LIST_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case PRODUCTS_CHANGE_SELECTED_PRODUCT:
            return {
                ...state,
                selected: action.payload,
            }
        default:
            return initialState;
    }
}

export default productReducer;