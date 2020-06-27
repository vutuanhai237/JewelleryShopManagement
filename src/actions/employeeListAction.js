import {
    EMPLOYEES_FETCH_LIST_SUCCESS, 
    EMPLOYEES_FETCH_LIST_LOADING,
    EMPLOYEES_CHANGE_SELECTED_EMPLOYEE,
    EMPLOYEES_ADD_EMPLOYEE_SUCCESS,
    EMPLOYEES_LIST_CHANGED
} from '../constants';

export function fetchEmployeeListSuccess(employees, count) {
    return {
        type: EMPLOYEES_FETCH_LIST_SUCCESS,
        payload: {
            employees,
            count,
        }
    }
}

export function fetchEmployeeListLoading() {
    return {
        type: EMPLOYEES_FETCH_LIST_LOADING,
    }
}

export function changeSelectedEmployee(employee) {
    return {
        type: EMPLOYEES_CHANGE_SELECTED_EMPLOYEE,
        payload: employee,
    }
}

export function addEmployeeSuccess() {
    return {
        type: EMPLOYEES_LIST_CHANGED,
    }
}

export function editEmployeeSuccess() {
    return {
        type: EMPLOYEES_LIST_CHANGED,
    }
}

export function deleteEmployeeSuccess() {
    return {
        type: EMPLOYEES_LIST_CHANGED,
    }
}