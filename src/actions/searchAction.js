import {FETCH_SEARCH_RESULT} from '../constants';

export function fetchSearchResultAction(results) {
    return {
        type: FETCH_SEARCH_RESULT,
        payload: results,
    }
}
