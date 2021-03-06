import { createAction, handleActions, combineActions } from 'redux-actions';
import axios from 'axios'

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

}

export const reducer = handleActions({
  [contactStart]: (state, action) => ({
    ...state,
    inProgress: true,
  }),

  [combineActions(contactSuccess)]: (state, action) => ({
    inProgress: false,

  }),

}, initialState)
