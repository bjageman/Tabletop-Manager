import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  user: {
    username: null,
    error: null,
  },
};

export const user = createReducer({
  [actions.register]: (state, payload) => {
    return { username: payload.username, password: payload.password };
  },
  [actions.login]: (state, payload) => {
    return { username: payload.username, password: payload.password };
  },
  [actions.logout]: (state) => {
    return null;
  },
  [actions.loginSuccess]: (state, payload) => {
    return payload.data;
  }
}, initial.user);
