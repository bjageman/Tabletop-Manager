import { combineReducers } from 'redux';

import { createReducer } from 'redux-act';
import * as actions from './actions'
const initial = {
  user: {
    username: null,
  },
};

export const user = createReducer({
  [actions.register]: (state, payload) => {
    return { username: payload.username, password:payload.password, fetching:true }
  },
  [actions.registerSuccess]: (state, payload) => {
    return { username: payload.username, message:payload.password, fetching:true }
  }
}, initial.user);


export default combineReducers(
  { user }
);
