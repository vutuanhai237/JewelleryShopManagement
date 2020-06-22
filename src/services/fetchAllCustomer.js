import { fetchAllCustomer } from '../actions/customerAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';

export default function fetchAllCustomer() {
    return dispatch => {
        var config = {
            method: 'get',
            url: 'http://chvbdq.herokuapp.com:80/khachhang/search?ten_kh=&cmnd=&from=0&count=10',
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
                console.log(error);
            });

        
    }
}
