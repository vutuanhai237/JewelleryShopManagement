import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import employeeReducer from './employeeReducer';
var root_reducer = combineReducers({
    home: homeReducer,
    employee: employeeReducer,
});


export default root_reducer;