import {
    fetchProductListLoading,
    fetchProductListSuccess,
    addProductSuccess,
    deleteProductSuccess,
    editProductSuccess,
} from '../actions/productAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';
import FormData from 'form-data';


export function fetchProducts(filter) {
    return dispatch => {
        const config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        }
        dispatch(fetchProductListLoading());
        axios.get(`https://${HOST}:${PORT}/free/sanpham/search`, {
            ...config,
            params: filter,
        })
            .then(res => {
                dispatch(fetchProductListSuccess(res.data.ds_sanpham, res.data.total_count));
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    alert("Bạn không có quyền truy cập trang này!");
                    window.location.href = "/";
                    return;
                }
                console.log(err);
            });


    }
}

export function deleteProduct(pid) {
    return dispatch => {
        if (!window.confirm("Bạn thật sự muốn xóa sản phẩm này?"))
            return;
        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }
        axios.delete(`https://${HOST}:${PORT}/sanpham/xoa/${pid}`, config)
            .then(response => {
                alert("Xóa sản phẩm thành công");
                dispatch(deleteProductSuccess());
            })
            .catch(error => {
                alert(error.message);
                console.log(error);
            });

    }
}

export function addProduct(product) {
    return dispatch => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }
        if (!product.ten_sp)
            return;
        var fd = new FormData();
        fd.append("ten_sp", product.ten_sp);
        fd.append("loai_sp", product.loai_sp);
        fd.append("gia_ban", product.gia_ban);
        fd.append("gia_nhap", product.gia_nhap);
        fd.append("tieu_chuan", product.tieu_chuan);
        fd.append("khoi_luong", product.khoi_luong);
        fd.append("nhacc_id", product.nhacc_id);
        fd.append("anh_dai_dien", product.anh_dai_dien);

        axios.post(`https://${HOST}:${PORT}/sanpham/tao`, fd, config)
            .then(response => {
                alert("Thêm sản phẩm thành công");
                dispatch(addProductSuccess());
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function editProduct(product, productId) {
    return dispatch => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }
        if (!product.ten_sp)
            return;
        var fd = new FormData();
        fd.append("ten_sp", product.ten_sp);
        fd.append("loai_sp", product.loai_sp);
        fd.append("gia_ban", product.gia_ban);
        fd.append("gia_nhap", product.gia_nhap);
        fd.append("tieu_chuan", product.tieu_chuan);
        fd.append("khoi_luong", product.khoi_luong);
        fd.append("nhacc_id", product.nhacc_id);
        fd.append("anh_dai_dien", product.anh_dai_dien);

        axios.put(`https://${HOST}:${PORT}/sanpham/capnhat/${productId}`, fd, config)
            .then(response => {
                alert("Sửa sản phẩm thành công");
                dispatch(editProductSuccess());
            })
            .catch(err => {
                alert(err.message);
                console.log(err);
            })
    }
}