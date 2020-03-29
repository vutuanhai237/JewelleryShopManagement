import { createStore, compose } from "redux";
import root_reducer from "../reducers/root_reducer"
var store = createStore(root_reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(()=> {
    var str = store.getState();
    document.getElementById("detail").innerHTML = JSON.stringify(str);
})

console.log(store.getState());

export default store;