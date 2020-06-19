import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import employeeReducer from './employeeReducer';
import customerReducer from './customerReducer';
import searchReducer from './searchReducer';

var root_reducer = combineReducers({
    home: homeReducer,
    employee: employeeReducer,
    customer: customerReducer,
    search: searchReducer,
});


export default root_reducer;