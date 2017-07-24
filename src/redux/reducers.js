import { combineReducers } from 'redux';

import { createReducer } from 'redux-act';
import * as actions from './actions'

import { journal } from 'apps/journal/redux/reducers'
import { user } from 'apps/user/redux/reducers'

const initial = {
  response: {
    success: null,
    error: null,
  },
};

export const response = createReducer({
  [actions.success]: (state, payload) => {
    return { success: payload.message };
  },
  [actions.error]: (state, payload) => {
    return { error: payload.message };
  }
}, initial.response);


export default combineReducers(
  { response, user, journal }
);
