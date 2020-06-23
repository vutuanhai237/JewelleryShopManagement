import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import employeeReducer from './employeeReducer';
import customerReducer from './customerReducer';
import searchReducer from './searchReducer';
import globalReducer from "./globalReducer";

var root_reducer = combineReducers({
    home: homeReducer,
    employee: employeeReducer,
    customer: customerReducer,
    search: searchReducer,
    global: globalReducer,
});


export default root_reducer;