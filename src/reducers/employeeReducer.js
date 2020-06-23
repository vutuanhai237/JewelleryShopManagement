
import { EMPLOYEE_ADD_ITEMTEMPTLIST, EMPLOYEE_CHANGE_ITEMTEMPTLIST, EMPLOYEE_DELETE_ITEMTEMPTLIST, EMPLOYEE_DISABLE_ITEMLIST } from "../constants"

const initialState = {
    itemTemptList: [],
    customerList: [],
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
                if (item.idsp === action.item.idsp) {
                    isInTemp = true;                
                }
                return isInTemp;
            })

            if (!isInTemp) {
                temp.push(action.item);
            }
            return { ...state, itemTemptList: temp };
        case EMPLOYEE_DELETE_ITEMTEMPTLIST:
            let temp2 = state.itemTemptList;
            temp2 = temp2.filter(item => item.idsp !== action.idsp);
            console.log(action.idsp);
            return { ...state, itemTemptList: temp2 }
        case EMPLOYEE_CHANGE_ITEMTEMPTLIST:
            let temp5 = state.itemTemptList;
            const index = temp5.findIndex(item => item.idsp === action.idsp);
            if (parseInt(action.so_luong) >= 0) {
                temp5[index].so_luong = parseInt(action.so_luong);
            }
            else {
                temp5[index].so_luong = parseInt(1);
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