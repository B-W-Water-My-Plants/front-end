// import axios from 'axios'
import { axiosWithAuth } from '../../utils/axiosWithAuth';





export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'



// Working

export const loginUser = (signIn, props) => dispatch => {
    dispatch({ type: LOGIN_START }) 
    
    

    axiosWithAuth()
    .post('/auth/login', signIn)
    .then(res=> {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        props.history.push(`/dashboard/${res.data.id}`)

        
    })
    .catch(err=>dispatch({ type: LOGIN_ERROR }))
}

//Working

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerUser = (user) => dispatch => {
    dispatch({ type: REGISTER_START })

    axiosWithAuth().post('/auth/register', user)
    .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        
    })
    .catch(err =>
    dispatch({type: REGISTER_ERROR }))
}


export const GET_PLANTS_REQUEST = "GET_PLANTS_REQUEST";
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS";
export const GET_PLANTS_FAILURE = "GET_PLANTS_FAILURE";


// grabs and saves the user ID once they log in
const id = localStorage.getItem('id');

export const getPlants = (props) => dispatch => {
    dispatch({type: GET_PLANTS_REQUEST});
    
    console.log(id)
    axiosWithAuth().get(`/${id}/plants`)
    .then(res => {
        console.log(res)
        dispatch({
            type:GET_PLANTS_SUCCESS, payload: res.data
        })
        props.history.push(`/dashboard/${id}`)
    })
    .catch(error => 
        dispatch({
        type: GET_PLANTS_FAILURE 
    }))


}

export const ADD_PLANT_REQUEST = "ADD_PLANT_REQUEST";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_FAILURE = "ADD_PLANT_FAILURE";

// Working

export const addPlant = (input, props) => dispatch => {
    dispatch({type: ADD_PLANT_REQUEST});
    
    axiosWithAuth().post(`/${id}/plants`, input)
    .then(res => {
        console.log(res)
        dispatch({type: ADD_PLANT_SUCCESS, payload: res.data})
        console.log('added item', res.data)
        props.history.push(`/dashboard/${id}`)
        
    })
    .catch(err => dispatch({type: ADD_PLANT_FAILURE }))


}



export const DELETE_PLANT_REQUEST = "DELETE_PLANT_REQUEST";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAILURE = "DELETE_PLANT_FAILURE";

export const deletePlant = () => dispatch => {
    // dispatch({type: DELETE_PLANT_REQUEST});
}

