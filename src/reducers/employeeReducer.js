
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

// const fakeItemTemptList = [
//     {
//         itemID: 2,
//         name: "Vàng 00000",
//         prices: 400000,
//         quantity: 0,
//     },
// ]
const fakeCustomer = [
    {
        customerID: 0,
        name: "Nguyễn Văn A",
        number: "0123456789",
        address: "Khu Phố 6"
    },
    {
        customerID: 1,
        name: "Nguyễn Văn B",
        number: "313131311",
        address: "Khu Phố 5"
    },
    {
        customerID: 2,
        name: "Nguyễn Văn C",
        number: "0123456744",
        address: "Khu Phố 4"
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
        address: "Trống"
    },
    disableItemList: false
}

function employeeReducer(state = initialState, action) {
    switch (action.type) {
        case "EMPLOYEEADDITEMTEMPTLIST":
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
        case "EMPLOYEEDELETEITEMTEMPTLIST":
            let temp2 = state.itemTemptList;
            temp2 = temp2.filter(e => e.itemID !== action.itemID);
            return { ...state, itemTemptList: temp2 }
        case "EMPLOYEECHANGEITEMTEMPTLIST":
            let temp5 = state.itemTemptList;
            if (parseInt(action.quantity) >= 0) {
                temp5[action.itemID].quantity = parseInt(action.quantity);
            }
            else {
                temp5[action.itemID].quantity = parseInt(1);
            }
            return { ...state, itemTemptList: temp5 }
        case "EMPLOYEESETCUSTOMERTEMPTLIST":
            let temp3 = state.customerList;
            temp3 = temp3.find(e => e.customerID == action.customerID);
            return { ...state, customerCurrent: temp3};
            //return {...state};
        case "EMPLOYEEDISABLEITEMLIST":
            return {...state, disableItemList: action.item};
        default:
            return initialState;
    
    }
}

export default employeeReducer;