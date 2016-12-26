import {ACTION_TYPE_LOGIN, ACTION_TYPE_LOGOUT} from '../actions/authAction';

// Reducer 負責通知View..  state = initialState(舊的狀態), (action) 可把狀態放在裡面.. 更新後的狀態 action.resp

const initialState = {
    isLogin: false,
    resp: undefined
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE_LOGIN:
            
            return {
                ...state,
                isLogin: true,
                resp: action.resp
            }
        case ACTION_TYPE_LOGOUT:
            return {
                ...state,
                isLogin: false
            }
        default: 
            return state;
    }
}

//不應該在reducer寫商業邏輯、請求資料 這些都要寫在actions
// const postLoginRequest = (userId) => {
//     return fetch(`http://210.63.39.104/mockup/api/sks_biz/login/${userId}`)
//             .then(response => response.json())
//             .then(responseJson => {
//                 console.log(JSON.stringify(responseJson));
//                 return responseJson;
//             })
//             .catch(error => {
//                 console.log(error);
//             });
// }

export default authReducer;

