import { combineReducers } from "redux";
import mang_reducer from "./mang_reducer"
import is_adding_reducer from "./is_adding_reducer"

var root_reducer = combineReducers({
    mang: mang_reducer,
    is_adding: is_adding_reducer
});


export default root_reducer;