import { createAction, handleActions, combineActions } from 'redux-actions';
import axios from 'axios'

const loginStart = createAction('USER_LOGIN_START');
const loginSuccess = createAction('USER_LOGIN_SUCCESS');
const loginFail = createAction('USER_LOGIN_FAIL');

export const login = (username, password) => dispatch => {
    dispatch(loginStart())
    return axios.post('/api/login', { username, password }).then(response => {
        dispatch(loginSuccess(response.data.result))
    }).catch(e => {
        dispatch(loginFail())
        throw e
    })
}

const registerStart = createAction('USER_REGISTER_START');
const registerSuccess = createAction('USER_REGISTER_SUCCESS');
const registerFail = createAction('USER_REGISTER_FAIL');

export const register = (code, username, password) => dispatch => {
    dispatch(registerStart())
    return axios.post('/api/register', { code, username, password }).then(response => {
        dispatch(registerSuccess(response.data.result))
    }).catch(e => {
        dispatch(registerFail())
        throw e
    })
}

const logoutSuccess = createAction('USER_LOGOUT_SUCCESS');

export const logout = () => dispatch => {
    dispatch(logoutSuccess())
    return axios.post('/api/logout')
}

const initialState = {
    inProgress: false,
    loggedIn: false,
    profile: null,
}

export const reducer = handleActions({
    [combineActions(loginStart, registerStart)]: (state, action) => ({
        inProgress: true,
        loggedIn: false,
        profile: null,
    }),
    [combineActions(loginSuccess, registerSuccess)]: (state, action) => ({
        inProgress: false,
        loggedIn: true,
        profile: action.payload,
    }),
    [combineActions(loginFail, registerFail, logoutSuccess)]: (state, action) => ({
        inProgress: false,
        loggedIn: false,
        profile: null,
    }),
}, initialState)
