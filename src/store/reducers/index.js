import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../actions';

const initialState = {
    token: null,
    user: null,
    loginStart: false,
    loginError: false,
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case LOGIN_START:
            return {
            ...state,
            loginStart: true
        };

        case LOGIN_SUCCESS:
            return {
            ...state, 
            loginStart: false,
            token: action.payload.token,
            user: action.payload.id
        };

        case LOGIN_ERROR:
            return {
            ...state,
            loginStart:false,
            loginError: true
        };

        case LOGOUT:
            return {
            ...state,
            token: null
        };

        default:
        return state;

    }
};

export default reducer;