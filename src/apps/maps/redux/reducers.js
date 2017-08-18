import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  maps: {
    owner: null,
    error: null,
  },
};

export const maps = createReducer({
  [actions.saveMap]: (state, payload) => {
    return {
        name: payload.name,
        fetching:true,
        error: null };
  },
  [actions.deleteMap]: (state, payload) => {
    return {
        event_id: payload.event_id,
        fetching:true,
        error: null };
  },
}, initial.maps);
