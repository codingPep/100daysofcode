import { userConstants } from "../_constants/";

const initialState = {
    isAuthenticated: false,
    user: {},
    token:''
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.AUTHENTICATE_USER:
            state = {
                ...state,
                isAuthenticated: true,
                user: action.auth.user,
                token: action.auth.token
            }
            break;
        case userConstants.LOGOUT_USER:
            state = {
                isAuthenticated: false,
                user: {},
                token: ''
            }
            break;
        default:
            return state;
    }
}

export default authReducer;