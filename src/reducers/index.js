import { combineReducers, createStore, compose } from "redux";
import homeReducer from './homeReducer';

var mang_reducer = (state = ["F", "B", "E"], action) => {
    switch (action.type) {
        case "add_item":
            return [...state, action.content];
        case "delete_item":
            return state.filter((e, i) => i !== action.index);
        default:
            return state;
    }
}
var is_adding_reducer = (state = false, action) => {
    switch(action.type) {
        case "is_adding":
            return !state;
        default:
            return state;
    }
}


var root_reducer = combineReducers({
    home: homeReducer,
    mang: mang_reducer,
    is_adding: is_adding_reducer
});

var store = createStore(root_reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(()=> {
    //document.getElementById("detail").innerHTML = JSON.stringify(str);
})
store.dispatch({
    content: "DDDD",
    type: "add_item"
});

export default store;