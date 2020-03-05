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
    GET_PLANT_REQUEST,
    GET_PLANT_SUCCESS,
    GET_PLANT_FAILURE,
    ADD_PLANT_REQUEST,
    ADD_PLANT_SUCCESS,
    ADD_PLANT_FAILURE,
    DELETE_PLANT_REQUEST,
    DELETE_PLANT_SUCCESS,
    DELETE_PLANT_FAILURE
}   from '../actions/index';

const initialState = {
  error: '',
  
  user: [],

  plantList:[],

  plants: {
    id:'',
    nickname: '',
    species: '',
    h2o_frequency:'',
    image:'',
    user_id: ''
  }

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
            
        };

        case LOGIN_ERROR:
            return {
            ...state,
            error: action.payload,
            
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
              error: action.error
        
            };

            //GET PLANT LIST


            case GET_PLANTS_REQUEST:
              return {
                ...state,
              };

            case GET_PLANTS_SUCCESS:
              return {
                ...state,
                plantList: [...action.payload],
              };

            case GET_PLANTS_FAILURE:
              return {
                ...state,
                error: action.error
              }


              // GET SINGLE PLANT


              case GET_PLANT_REQUEST:
              return {
                ...state,
                
              };

            case GET_PLANT_SUCCESS:
              return {
                ...state,
                plant: {
                  id: action.payload.id,
                  nickname: action.payload.nickname,
                  species: action.payload.species,
                  h2o_frequency: action.payload.h2o_frequency,
                  image: action.payload.image,
                  user_id: action.payload.id
                }
              };

            case GET_PLANT_FAILURE:
              return {
                ...state,
                error: action.error
              }
              
              // ADD NEW PLANT


              case ADD_PLANT_SUCCESS:
                return {
                  ...state,
                  plantList: action.payload
                };
              case ADD_PLANT_REQUEST:
                return {
                  ...state,
                };
              case ADD_PLANT_FAILURE:
                return {
                  ...state,
                  error: action.error
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
                    error: action.error
                  }
        default:
        return state;

    }
};
