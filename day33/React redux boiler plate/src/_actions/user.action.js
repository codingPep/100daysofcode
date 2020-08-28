import { userConstants } from "../_constants/";
import { userService } from "../_services/";
export const authenticate = (email,password) => {
    return dispatch => {
        userService.login(email, password)
            .then(res => {
                dispatch({
                    type: userConstants.AUTHENTICATE_USER,
                    user:res
                })
                return res;
                
        })
    }
}

export const signup = () => {
    
}

export const getToken = () => {
    return dispatch => {
        const authData = window.localStorage.getItem('auth');
        if (authData) {
            const auth = JSON.parse(authData);
            if (auth.hasOwnProperty('token') && auth.token != '') {
                dispatch({
                    type: userConstants.AUTHENTICATE_USER,
                    auth: auth
                });
                return Promise.resolve(true);
            }
            return Promise.resolve(false);
        }
  }  
}

export const logout = () => {
    
}