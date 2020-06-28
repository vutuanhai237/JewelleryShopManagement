import { fetchAllCustomer } from '../actions/customerAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';

export default function fetchAllCustomer() {
    return dispatch => {
        var config = {
            method: 'get',
            url: `http://${HOST}:${PORT}/khachhang/search?ten_kh=&cmnd=&from=0&count=10`,
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            }
        };
        axios(config)
            .then(function (response) {
                let data = JSON.parse(JSON.stringify(response.data)).ds_khachhang;
                return data;
            })
            .catch(function (error) {
                if(error.response && error.response.status === 401){
                    alert("Bạn không có quyền truy cập trang này!");
                    window.location.href = "/";
                    return;
                }
            });

        
    }
}
