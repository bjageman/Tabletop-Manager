import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  user: {
    access_token: null,
    username: null,
    campaigns: [],
    error: null,
  },
};

export const user = createReducer({
  [actions.register]: (state, payload) => {
    return { username: payload.username };
  },
  [actions.login]: (state, payload) => {
    return { username: payload.username };
  },
  [actions.logout]: (state) => {
    return null;
  },
  [actions.loginSuccess]: (state, payload) => {
    return {
        "access_token" : payload.access_token,
        "username": payload.username,
        ...state,
        "id": payload.id,
        "campaigns": payload.campaigns,
         } ;
  }
}, initial.user);
