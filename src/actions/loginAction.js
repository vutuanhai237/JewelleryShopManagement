import {
    LOGIN,
    REMEMBER_LOGIN,
    REGISTER,
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

export const register = (username, password, email, password_email, alias) => {
    return {
        type: REGISTER,
        content: {username, password, email, password_email, alias}
    };
}


