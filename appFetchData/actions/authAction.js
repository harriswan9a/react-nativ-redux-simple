export const ACTION_TYPE_LOGIN = 'ACTION_TYPE_LOGIN';
export const ACTION_TYPE_LOGOUT = 'ACTION_TYPE_LOGOUT';

export const loginAction = (isLogin, resp) => {
    return {
        type: ACTION_TYPE_LOGIN,
        isLogin: true,
        resp: resp
    }
}

export const logoutAction = () => {
    return {
        type: ACTION_TYPE_LOGOUT
    }
}

export function fetchUser(userId) {
    return function(dispatch) {
        return fetchLogin(userId)
        .then((resp, error) => {
            // console.log(resp);
            dispatch(loginAction(true, resp));
        });
    }
}

function  fetchLogin(userId) {
    return fetch(`http://210.63.39.104/mockup/api/sks_biz/login/${userId}`)
            .then(response => response.json())
            .then(responseJson => {
                alert(JSON.stringify(responseJson));
                return responseJson;
            })
            .catch(error => {
                console.log(error);
            });
}

export const login = () => fetchLogin('0005963');