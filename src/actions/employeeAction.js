import {
    EMPLOYEE_CHANGE_CATEGORY,
    EMPLOYEE_FETCH_LISTITEM_SUCCESS
} from '../constants';
export function changeCategoryAction(category) {
    return {
        type: EMPLOYEE_CHANGE_CATEGORY,
        payload: category,
    }
}

export function fetchItemListSuccess(itemList) {
    return {
        type: EMPLOYEE_FETCH_LISTITEM_SUCCESS,
        payload: itemList,
    }
}