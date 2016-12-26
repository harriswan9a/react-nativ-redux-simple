import {ACTION_TYPE_LOGIN, ACTION_TYPE_LOGOUT} from '../actions/authAction';


const initialState = {
    isLogin: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPE_LOGIN:
            return {
                ...state,
                isLogin: true
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

export default authReducer;