import { FETCH_SEARCH_RESULT } from '../constants';

const initialState = {
    results: [],
    loading: true,
}

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCH_RESULT:
            return {
                ...state,
                results: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default searchReducer;