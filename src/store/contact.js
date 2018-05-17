import { createAction, handleActions, combineActions } from 'redux-actions';
import axios from 'axios'


// CONTACT middleware

export const contactMiddleware = store => next => action => {
  if (action.type.substr(0, 5) === 'CONTACT_') {
    const res = next(action)
    stateToStorage(store.getState().contact)
    return res
  }
  return next(action)
}

const stateFromStorage = () => {
  const stateData = sessionStorage.getItem('CONTACT_STATE')
  if (!stateData) {
    return initialState
  }

  try {
    return JSON.parse(stateData)
  } catch (e) {
    sessionStorage.removeItem('state')
    return initialState
  }
}

const stateToStorage = (state) => {
  sessionStorage.setItem('CONTACT_STATE', JSON.stringify(state))
}

const contactStart = createAction('CONTACT_CONTACT_START');
const contactSuccess = createAction('CONTACT_CONTACT_SUCCESS');
const contactFail = createAction('CONTACT_CONTACT_FAIL');

export const contact = (email, whatsup) => dispatch => {
  dispatch(contactStart())
  return axios.post('/api/contact', { email, whatsup }).then(response => {
    dispatch(contactSuccess(response.data.result))
  }).catch(e => {
    dispatch(contactFail())
    throw e
  })
}

const initialState = {
  inProgress: true,
  loggedIn: true,

}

export const reducer = handleActions({
  [contactStart]: (state, action) => ({
    ...state,
    inProgress: true,
  }),

  [combineActions(contactSuccess)]: (state, action) => ({
    inProgress: false,

  }),

}, stateFromStorage())
