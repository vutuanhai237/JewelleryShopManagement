import { CUSTOMER_ADD, CUSTOMER_CHANGE, CUSTOMER_DELETE, CUSTOMER_GET_ALL } from "../constants"


const initialState = {
    customerList: [
        {
            cmnd: "225818000",
            dia_chi: null,
            gioi_tinh: "NỮ",
            id: "5dk34kbp5myvt",
            ngay_sinh: "1999-01-15T00:00:00.000Z",
            sdt: "0123456789",
            ten_kh: "Khách hàng A",
            tk_id: null,
            tong_gia_tri_ban: 0,
            tong_gia_tri_mua: 0,
        }
    ],
    customerCurrent: {
        cmnd: "",
        dia_chi: "",
        gioi_tinh: "",
        id: "",
        ngay_sinh: "",
        sdt: "",
        ten_kh: "",
        tk_id: "",
        tong_gia_tri_ban: "",
        tong_gia_tri_mua: "",
    },
}


function customerReducer(state = initialState, action) {
    switch (action.type) {
        case CUSTOMER_ADD:
            return state;
        case CUSTOMER_DELETE:
            return state;
        case CUSTOMER_CHANGE:
            return {...state, customerCurrent: action.customer};
        case CUSTOMER_GET_ALL:
            return state;
        default:
            return state;
    }
}

export default customerReducer;