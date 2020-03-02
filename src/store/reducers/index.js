import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
} from '../actions/index';

const initialState = {
  token: null,
  user: [],
  plantList:[],

};

export const reducer = (state = initialState, action) => {
    switch(action.type){

        case LOGIN_START:
            return {
            ...state,
        };

        case LOGIN_SUCCESS:
            return {
            ...state, 
            user: action.payload,
            token: action.payload.token
        };

        case LOGIN_ERROR:
            return {
            ...state,
            
        };
        
        case REGISTER_START:
            return {
              ...state,
    
            };
      
          case REGISTER_SUCCESS:
            return {
              ...state,
              user: action.payload,
            };
      
          case REGISTER_ERROR:
            return {
              ...state,
        
            };

        // case LOGOUT:
        //     return {
        //     ...state,
        //     token: null
        // };

        default:
        return state;

    }
};
