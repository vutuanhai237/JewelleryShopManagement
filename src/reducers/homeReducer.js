import { HOME_CHANGE_CATEGORY, HOME_FETCH_PRODUCT_SUCCESS } from '../constants';

const initialState = {
    category: 0,
    products: [],
}

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case HOME_CHANGE_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }
        case HOME_FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
            }
        default:
            return initialState;
    }
}

export default homeReducer;