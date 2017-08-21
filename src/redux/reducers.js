import { combineReducers } from 'redux';

import { createReducer } from 'redux-act';
import * as actions from './actions'

import { user } from 'apps/user/redux/reducers'
import { campaign } from 'apps/campaign/redux/reducers'
import { journal } from 'apps/journal/redux/reducers'
import { characters } from 'apps/characters/redux/reducers'
import { calendar } from 'apps/calendar/redux/reducers'
import { maps } from 'apps/maps/redux/reducers'

const initial = {
  response: {
    success: null,
    error: null,
  },
};

export const response = createReducer({
  [actions.success]: (state, payload) => {
    return { success: payload.message, loading: false };
  },
  [actions.error]: (state, payload) => {
    return { error: payload.message || "Unknown Error", loading: false };
  },
  [actions.clear]: (state, payload) => {
    return { error: null, success: null };
  }
}, initial.response);


export default combineReducers(
  { response, user, campaign, characters, journal, calendar, maps }
);
