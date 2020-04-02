import { combineReducers } from "redux";
import mang_reducer from "./mang_reducer"
import is_adding_reducer from "./is_adding_reducer"
import homeReducer from './homeReducer';

var root_reducer = combineReducers({
    home: homeReducer,
    mang: mang_reducer,
    is_adding: is_adding_reducer
});


export default root_reducer;