import { fetchProductListLoading, fetchProductListSuccess } from '../actions/productAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';

export function fetchProducts(filter) {
    return dispatch => {
        dispatch(fetchProductListLoading());
        axios.get(`https://${HOST}:${PORT}/sanpham`, {
            params: filter
        })
        .then(response => {
            dispatch(fetchProductListSuccess(response.data));
        })
        .catch(error => {
            console.log(error);
        });
        
    }
}
