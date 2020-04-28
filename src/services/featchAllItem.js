import { fetchSearchResultAction } from '../actions/searchAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';

export default function fetchHomeProducts(ten_sp) {
    return dispatch => {
        axios.get(`http://${HOST}:${PORT}/sanpham`, {
            params: {
                ten_sp: ten_sp,
                loai_sp: 'Dây chuyền',
                from: 0,
                so_luong: 10,
            }
        })
        .then(response => {
            dispatch(fetchSearchResultAction(response.data));
        })
        .catch(error => {
            console.log(error);
        });
        
    }
}
