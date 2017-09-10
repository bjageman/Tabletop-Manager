import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  maps: {
    entries: [],
    fetching: false,
    error: null,
  },
};

export const maps = createReducer({
  [actions.getMaps]: (state, payload) => {
      return { id: payload.id, fetching:true, error: null, entries: state.entries };
  },
  [actions.mapSuccess]: (state, payload) => {
    return { entries: payload.entries, fetching:false, error: null };
  },
  [actions.saveMap]: (state, payload) => {
    return {
        name: payload.name,
        fetching:true,
        error: null,
        entries: state.entries };
  },
  [actions.deleteMap]: (state, payload) => {
    return {
        map_id: payload.map_id,
        fetching:true,
        error: null,
        entries: state.entries };
  },
}, initial.maps);
