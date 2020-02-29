// import axios from 'axios'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginUser = (signIn, history) => dispatch => {
    dispatch({ type: LOGIN_START }) 

    axiosWithAuth()
    .post('/auth/login', signIn)
    .then(res=> {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        
    })
    .catch(err=>dispatch({ type: LOGIN_ERROR }))
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerUser = (user, history) => dispatch => {
    dispatch({ type: REGISTER_START })

    axiosWithAuth().post('/auth/register', user)
    .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        
    })
    .catch(err =>
    dispatch({type: REGISTER_ERROR }))
}

export const LOGOUT = 'LOGOUT'

export const logout = (history) => dispatch => {
    dispatch({ type: LOGOUT})
    localStorage.removeItem("token")
    
}