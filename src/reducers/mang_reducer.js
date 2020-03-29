
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

export default mang_reducer;