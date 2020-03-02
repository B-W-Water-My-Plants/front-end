import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_PLANTS_REQUEST,
    GET_PLANTS_SUCCESS,
    GET_PLANTS_FAILURE,
    ADD_PLANT_REQUEST,
    ADD_PLANT_SUCCESS,
    ADD_PLANT_FAILURE,
    DELETE_PLANT_REQUEST,
    DELETE_PLANT_SUCCESS,
    DELETE_PLANT_FAILURE
} from '../actions/index';

const initialState = {
  token: null,
  user: [],
  plantList:[],

};

export const reducer = (state = initialState, action) => {
    switch(action.type){

      // LOGIN EXISTING USER
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
        
        // REGISTER NEW USER
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

            //GET PLANT LIST
            case GET_PLANTS_REQUEST:
              return {
                ...state,
              };

            case GET_PLANTS_SUCCESS:
              return {
                ...state,
              };

            case GET_PLANTS_FAILURE:
              return {
                ...state
              }
              
              // ADD NEW PLANT
              case ADD_PLANT_SUCCESS:
                return {
                  ...state,
                };
              case ADD_PLANT_REQUEST:
                return {
                  ...state,
                };
              case ADD_PLANT_FAILURE:
                return {
                  ...state,
                };
                
                // DELETE PLANT
                case DELETE_PLANT_REQUEST:
                  return {
                    ...state,
                  }
                case DELETE_PLANT_SUCCESS:
                  return {
                    ...state,
                  }
                case DELETE_PLANT_FAILURE:
                  return {
                    ...state,
                  }
        default:
        return state;

    }
};
