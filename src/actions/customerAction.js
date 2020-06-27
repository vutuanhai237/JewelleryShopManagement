import {
    CUSTOMER_ADD,
    CUSTOMER_CHANGE,
    CUSTOMER_DELETE,
    CUSTOMER_GET,
    CUSTOMER_GET_ALL
} from '../constants';



export function addCustomer(customer) {
    return {
        type: CUSTOMER_ADD,
        payload: customer,
    }
}

export function deleteCustomer(cmnd) {
    return {
        type: CUSTOMER_DELETE,
        payload: cmnd,
    }
}

export function fetchAllCustomer(results) {
    return {
        type: CUSTOMER_GET_ALL,
        payload: results,
    }
}