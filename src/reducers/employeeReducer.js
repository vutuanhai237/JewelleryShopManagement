import { EMPLOYEE_CHANGE_CATEGORY, EMPLOYEE_FETCH_LISTITEM_SUCCESS } from '../constants';

const initialState = {
    category: 0,
    itemList: [],
}

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case EMPLOYEE_CHANGE_CATEGORY:
            return {
                ...state,
                category: action.payload,
            }
        case EMPLOYEE_FETCH_LISTITEM_SUCCESS:
            return {
                ...state,
                itemList: action.payload,
            
            }
        default:
            return initialState;
    }
}

export default homeReducer;