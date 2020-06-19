import { CUSTOMER_ADD, CUSTOMER_CHANGE, CUSTOMER_DELETE, CUSTOMER_GET} from "../constants"
const fakeCustomer = [
    {
        ten_kh: "Khách hàng B",
        cmnd: "225818001",
        gioi_tinh: "NỮ",
        sdt: "0123456789",
        ngay_sinh: "01/15/1999"
    },
    {
        ten_kh: "Khách hàng C",
        cmnd: "225818002",
        gioi_tinh: "NỮ",
        sdt: "014664329",
        ngay_sinh: "01/15/1999"
    },
    {
        ten_kh: "Ngô Thì Nhậm",
        cmnd: "225818003",
        gioi_tinh: "NỮ",
        sdt: "0123456789",
        ngay_sinh: "01/15/1999"
    },
];

const initialState = {
    customerList: fakeCustomer,
    customerCurrent: {
        ten_kh: "-1",
        cmnd: "",
        gioi_tinh: "",
        sdt: "",
        ngay_sinh: ""
    },
}


function customerReducer(state = initialState, action) {
    switch (action.type) {
        case CUSTOMER_ADD:
        
            let temp3 = state.customerList;
            temp3.push({
                ten_kh: action.ten_kh,
                cmnd: action.cmnd,
                gioi_tinh: action.gioi_tinh,
                sdt: action.sdt,
                ngay_sinh: action.ngay_sinh
            });
            return { ...state, customerList:temp3 };
        case CUSTOMER_DELETE:
            
            let temp = state.customerList;
            temp = temp.filter(e => e.cmnd !== action.cmnd);
            return { ...state, customerList: temp }
        case CUSTOMER_CHANGE:
            let temp2 = state.customerList;
            temp2 = temp2.filter(e => e.cmnd === action.cmnd);
            return { ...state, customerCurrent: temp2[0] };

        default:
            return state;
    }
}

export default customerReducer;