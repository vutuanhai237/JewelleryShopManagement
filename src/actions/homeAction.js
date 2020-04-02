import {
    HOME_CHANGE_CATEGORY,
    HOME_FETCH_PRODUCT_SUCCESS,
} from '../constants';

export function changeCategoryAction(category) {
    return {
        type: HOME_CHANGE_CATEGORY,
        payload: category,
    }
}

export function fetchProductSuccess(products) {
    return {
        type: HOME_FETCH_PRODUCT_SUCCESS,
        payload: products,
    }
}

