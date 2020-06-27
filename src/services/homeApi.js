import { fetchSearchResultAction } from '../actions/searchAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';

export default function fetchHomeProducts(ten_sp) {
    return dispatch => {
        axios.get(`http://${HOST}:${PORT}/free/sanpham/search`, {
            params: {
                ten_sp: ten_sp,
                loai_sp: '',
                from: 0,
                so_luong: 10,
            }
        })
        .then(response => {
            dispatch(fetchSearchResultAction(response.data.ds_sanpham));
        })
        .catch(error => {
            alert(error.message);
            console.log(error);
        });
        
    }
}
