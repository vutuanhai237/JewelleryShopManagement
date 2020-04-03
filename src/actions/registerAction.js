import {
    REGISTER,
} from '../constants';
export const register = (username, password, email, password_email, alias) => {
    return {
        type: REGISTER,
        content: {username, password, email, password_email, alias}
    };
}