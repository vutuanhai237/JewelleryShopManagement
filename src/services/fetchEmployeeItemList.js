import { fetchItemListSuccess } from '../actions/employeeAction';



const fakeListItem = [
    {
        itemId: 0,
        itemName: "Vàng 999",
        itemNumber: 5,
        itemPrice: 3000000,
    },

    {
        itemId: 1,
        itemName: "Bạc 999",
        itemNumber: 10,
        itemPrice: 3000000,
    },

    {
        itemId: 1,
        itemName: "Bạc 999",
        itemNumber: 10,
        itemPrice: 3000000,
    },

    {
        itemId: 1,
        itemName: "Bạc 999",
        itemNumber: 10,
        itemPrice: 3000000,
    },

]
export default function fetchEmployeeItemList() {
    return dispatch => {
        dispatch(fetchItemListSuccess(fakeListItem));
        return fakeListItem;
    }
}