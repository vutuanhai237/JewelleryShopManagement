import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import employeeReducer from './employeeReducer';
import searchReducer from './searchReducer';

var root_reducer = combineReducers({
    home: homeReducer,
    employee: employeeReducer,
    search: searchReducer,
});


export default root_reducer;