import { combineReducers } from "redux";
import homeReducer from './homeReducer';

var root_reducer = combineReducers({
    home: homeReducer,
});


export default root_reducer;