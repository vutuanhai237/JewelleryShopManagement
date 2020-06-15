import { fetchEmployeeListSuccess } from '../actions/employeeListAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';
import FormData from 'form-data';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0a19pZCI6IjRla3U2cXNrYXhlYmt5aSIsImxvYWlfdGsiOiIxIiwiaWF0IjoxNTkyMjQwMDgxfQ.hpnJnccJG5NtfKvLATo2yYopE6fRezI_xLfiFaH4zn4";

export function fetchEmployees(filter) {
    return dispatch => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
        axios.get(`https://${HOST}:${PORT}/nhanvien/search`, {
            ...config,
            params: filter,
        })
            .then(res => {
                dispatch(fetchEmployeeListSuccess(res.data.ds_nhanvien, res.data.total_count));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function getEmployeeAvatar(employeeId) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    return axios.get(`https://${HOST}:${PORT}/taikhoan/${employeeId}`, config)
}

// export function deleteProduct(pid, filter) {
//     return dispatch => {
//         const config = {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//         axios.delete(`https://${HOST}:${PORT}/sanpham/${pid}`, config)
//             .then(response => {
//                 dispatch(deleteProductSuccess());
//                 //dispatch(fetchProducts(filter));
//             })
//             .catch(error => {
//                 console.log(error);
//             });

//     }
// }

// export function addProduct(product, filter) {
//     return dispatch => {
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data',
//                 'Authorization': `Bearer ${token}`
//             }
//         }
//         if (!product.ten_sp)
//             return;
//         var fd = new FormData();
//         fd.append("ten_sp", product.ten_sp);
//         fd.append("loai_sp", product.loai_sp);
//         fd.append("gia_ban", product.gia_ban);
//         fd.append("gia_nhap", product.gia_nhap);
//         fd.append("tieu_chuan", product.tieu_chuan);
//         fd.append("khoi_luong", product.khoi_luong);
//         fd.append("nhacc_id", product.nhacc_id);
//         fd.append("anh_dai_dien", product.anh_dai_dien);

//         axios.post(`https://${HOST}:${PORT}/sanpham`, fd, config)
//             .then(response => {
//                 dispatch(addProductSuccess());
//                 //dispatch(fetchProducts(filter));
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }