export const ACTION_TYPE_LOGIN = 'ACTION_TYPE_LOGIN';
export const ACTION_TYPE_LOGOUT = 'ACTION_TYPE_LOGOUT';

export const loginAction = () => {
    return {
        type: ACTION_TYPE_LOGIN
    }
}

export const logoutAction = () => {
    return {
        type: ACTION_TYPE_LOGOUT
    }
}