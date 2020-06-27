import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import employeeReducer from './employeeReducer';
import customerReducer from './customerReducer';
import searchReducer from './searchReducer';
import productReducer from "./productReducer";
import employeeListReducer from './employeeListReducer';
import globalReducer from "./globalReducer";

var rootReducer = combineReducers({
    home: homeReducer,
    employee: employeeReducer,
    customer: customerReducer,
    search: searchReducer,
    product: productReducer,
    employeeList: employeeListReducer,
    global: globalReducer,
});


export default rootReducer;