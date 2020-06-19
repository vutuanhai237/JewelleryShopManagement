
import { EMPLOYEE_ADD_ITEMTEMPTLIST, EMPLOYEE_CHANGE_ITEMTEMPTLIST, EMPLOYEE_DELETE_ITEMTEMPTLIST, EMPLOYEE_DISABLE_ITEMLIST } from "../constants"

const fakeItemList = [
    {
        itemID: 0,
        name: "Vàng 000",
        prices: 200000
    },
    {
        itemID: 1,
        name: "Vàng 0000",
        prices: 300000
    },
    {
        itemID: 2,
        name: "Vàng 00000",
        prices: 400000
    },

];

const fakeCustomer = [
    {
        customerID: 0,
        name: "Nguyễn Văn A",
        number: "0123456789",
        id: "Khu Phố 6"
    },
    {
        customerID: 1,
        name: "Nguyễn Văn B",
        number: "313131311",
        id: "Khu Phố 5"
    },
    {
        customerID: 2,
        name: "Nguyễn Văn C",
        number: "0123456744",
        id: "Khu Phố 4"
    }
];
const initialState = {
    itemList: fakeItemList,
    itemTemptList: [],
    customerList: fakeCustomer,
    customerCurrent: {
        customerID: -1,
        name: "Trống",
        number: "Trống",
        id: "Trống"
    },
    disableItemList: false
}
function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case EMPLOYEE_ADD_ITEMTEMPTLIST:
            let temp = state.itemTemptList;
            let isInTemp = false;
            temp.map((item, i) => {
                if (item.itemID === action.item.itemID) {
                    isInTemp = true;                
                }
                return isInTemp;
            })

            if (!isInTemp) {
                temp.push({
                    itemID: action.item.itemID,
                    name: action.item.name,
                    prices: action.item.prices,
                    quantity: 1
                });
            }
            return { ...state, itemTemptList: temp };
        case EMPLOYEE_DELETE_ITEMTEMPTLIST:
            let temp2 = state.itemTemptList;
            temp2 = temp2.filter(e => e.itemID !== action.itemID);
            return { ...state, itemTemptList: temp2 }
        case EMPLOYEE_CHANGE_ITEMTEMPTLIST:
            let temp5 = state.itemTemptList;
            if (parseInt(action.quantity) >= 0) {
                temp5[action.itemID].quantity = parseInt(action.quantity);
            }
            else {
                temp5[action.itemID].quantity = parseInt(1);
            }
            return { ...state, itemTemptList: temp5 }
        case "EMPLOYEE_SET_CUSTOMERTEMPTLIST":
            let temp3 = state.customerList;
            temp3 = temp3.find(e => e.customerID == action.customerID);
            return { ...state, customerCurrent: temp3};
        case EMPLOYEE_DISABLE_ITEMLIST:
            return {...state, disableItemList: action.item};
        default:
            return initialState;
    
    }
}

export default employeeReducer;