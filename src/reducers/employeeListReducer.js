import {
    EMPLOYEES_FETCH_LIST_LOADING,
    EMPLOYEES_FETCH_LIST_SUCCESS,
    EMPLOYEES_CHANGE_SELECTED_EMPLOYEE,
    EMPLOYEES_LIST_CHANGED,
} from '../constants';

const initialState = {
    loading: true,
    employees: [],
    selected: null,
    count: 0,
    changed: false,
}

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case EMPLOYEES_FETCH_LIST_LOADING:
            return {
                ...state,
                loading: true,
                changed: false,
            }
        case EMPLOYEES_FETCH_LIST_SUCCESS:
            return {
                ...state,
                employees: action.payload.employees,
                count: action.payload.count,
                loading: false,
                changed: false,
            }
        case EMPLOYEES_CHANGE_SELECTED_EMPLOYEE:
            return {
                ...state,
                selected: action.payload,
            }
        case EMPLOYEES_LIST_CHANGED:
            return {
                ...state,
                changed: true,
            }
        default:
            return initialState;
    }
}

export default employeeReducer;