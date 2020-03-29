var is_adding_reducer = (state = false, action) => {
    switch(action.type) {
        case "is_adding":
            return !state;
        default:
            return state;
    }
}

export default is_adding_reducer;