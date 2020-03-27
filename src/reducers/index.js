const redux = require("redux");

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


var root_reducer = redux.combineReducers({
    mang: mang_reducer,
    is_adding: is_adding_reducer
});

var store = redux.createStore(root_reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(()=> {
    var str = store.getState();
    document.getElementById("detail").innerHTML = JSON.stringify(str);
})
store.dispatch({
    content: "DDDD",
    type: "add_item"
});
console.log(store.getState());


module.exports = store;