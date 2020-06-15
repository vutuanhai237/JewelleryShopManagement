import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import employeeReducer from './employeeReducer';
import searchReducer from './searchReducer';
import productReducer from "./productReducer";
import employeeListReducer from './employeeListReducer';

var rootReducer = combineReducers({
    home: homeReducer,
    employee: employeeReducer,
    search: searchReducer,
    product: productReducer,
    employeeList: employeeListReducer,
});


export default rootReducer;