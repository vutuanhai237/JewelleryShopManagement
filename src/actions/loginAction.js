import {
    LOGIN,
    REMEMBER_LOGIN,
} from '../constants';
export const login = (hash) => {
    return {
        type: LOGIN,
        payload: hash
    };
}

export const rememberLogin = (checked) => {
    return {
        type: REMEMBER_LOGIN,
        payload: checked
    };
}




