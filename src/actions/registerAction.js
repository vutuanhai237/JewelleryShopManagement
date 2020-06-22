import {
    REGISTER,
} from '../constants';
export const register = (username, password, email, password_email, alias) => {
    return {
        type: REGISTER,
        payload: {username, password, email, password_email, alias}
    };
}