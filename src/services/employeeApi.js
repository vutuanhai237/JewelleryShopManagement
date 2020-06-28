import { fetchEmployeeListSuccess, addEmployeeSuccess, editEmployeeSuccess, deleteEmployeeSuccess } from '../actions/employeeListAction';
import axios from 'axios';
import { HOST, PORT } from '../constants';
import FormData from 'form-data';


export function fetchEmployees(filter) {
    return dispatch => {
        const config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        }
        axios.get(`http://${HOST}:${PORT}/nhanvien/search`, {
            ...config,
            params: filter,
        })
            .then(res => {
                dispatch(fetchEmployeeListSuccess(res.data.ds_nhanvien, res.data.total_count));
                console.log(res.data.ds_nhanvien);
            })
            .catch(err => {
                if(err.response && err.response.status === 401){
                    alert("Bạn không có quyền truy cập trang này!");
                    window.location.href = "/";
                    return;
                }
                console.log(err);
            });
    }
}

export function getEmployeeAvatar(employeeId) {
    const config = {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
    }
    return axios.get(`http://${HOST}:${PORT}/taikhoan/getbyid/${employeeId}`, config)
}

export function addEmployee(employee) {
    return dispatch => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }
        if (!employee.ho_ten)
            return;
        var fd = new FormData();
        fd.append("ho_ten", employee.ho_ten);
        fd.append("cmnd", employee.cmnd);
        fd.append("sdt", employee.sdt);
        fd.append("ngay_sinh", employee.ngay_sinh);
        fd.append("gioi_tinh", employee.gioi_tinh);
        fd.append("ten_tk", employee.ten_tk);
        fd.append("mat_khau", employee.mat_khau);
        fd.append("loai_tk", employee.loai_tk);
        fd.append("anh_dai_dien", employee.anh_dai_dien);
        fd.append("luong", employee.luong);
        fd.append("dia_chi", employee.dia_chi);

        axios.post(`http://${HOST}:${PORT}/nhanvien/tao`, fd, config)
            .then(response => {
                alert("Thêm nhân viên mới thành công");
                dispatch(addEmployeeSuccess());
            })
            .catch(err => {
                alert(err.message);
                console.log(err);
            })
    }
}

export function editEmployee(employee, employeeId) {
    return dispatch => {
        const config = {
            headers: {
                //'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }
        if (!employee.ho_ten)
            return;

        // var fd = new FormData();
        // fd.append("ho_ten", employee.ho_ten);
        // fd.append("cmnd", employee.cmnd);
        // fd.append("sdt", employee.sdt);
        // fd.append("ngay_sinh", employee.ngay_sinh);
        // fd.append("gioi_tinh", employee.gioi_tinh);
        // //fd.append("luong", employee.luong);
        // fd.append("dia_chi", employee.dia_chi ?? "");
        // // fd.append("ten_tk", employee.ten_tk);
        // // fd.append("mat_khau", employee.mat_khau);
        // // fd.append("loai_tk", employee.loai_tk);
        // // fd.append("anh_dai_dien", employee.anh_dai_dien);

        axios.put(`http://${HOST}:${PORT}/nhanvien/capnhat/${employeeId}`, employee, config)
            .then(response => {
                alert("Cập nhật thông tin nhân viên thành công");
                dispatch(editEmployeeSuccess());
            })
            .catch(err => {
                alert(err.message);
                console.log(err);
            })
    }
}

export function deleteEmployee(eid) {
    return dispatch => {
        if (!window.confirm("Bạn thật sự muốn xóa nhân viên này?"))
            return;
        const config = {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }
        axios.delete(`http://${HOST}:${PORT}/nhanvien/xoa/${eid}`, config)
            .then(response => {
                alert("Xóa nhân viên thành công");
                dispatch(deleteEmployeeSuccess());
            })
            .catch(error => {
                alert(error.message);
                console.log(error);
            });
    }
}