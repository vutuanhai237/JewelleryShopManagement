import {
    LOGIN,
    REMEMBER_LOGIN,
} from '../constants';
export const login = (hash) => {
    return {
        type: LOGIN,
        content: hash
    };
}

export const rememberLogin = (checked) => {
    return {
        type: REMEMBER_LOGIN,
        content: checked
    };
}




