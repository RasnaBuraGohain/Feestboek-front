import { createAction, handleActions, combineActions } from 'redux-actions';

const contactStart = createAction('CONTACT_CONTACT_START');
const contactSuccess = createAction('CONTACT_CONTACT_SUCCESS');
const contactFail = createAction('CONTACT_CONTACT_FAIL');

export const contact = (email, whatsup) => (dispatch, getState) => {
  const state = getState()
  dispatch(contactStart())
  if (state.contact.inProgress) {
    dispatch(contactFail())
    return
  }

  setTimeout(() => {
    dispatch(contactSuccess())
  }, 5000);
}

const initialState = {
  inProgress: false,

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
