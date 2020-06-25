import { GLOBAL_CHANGE } from "../constants"

const initialState = {
    id: "",
    anh_dai_dien: "",
    loai_tk: ""
}


function globalReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_CHANGE:
            return { id: action.id, anh_dai_dien: action.anh_dai_dien, loai_tk: action.loai_tk };
        default:
            return state;
    }
}

export default globalReducer;