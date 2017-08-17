import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  character: null,
};

export const character = createReducer({
  [actions.getCharacters]: (state, payload) => {
    return { campaign_id: payload.campaign_id };
  },
}, initial.character);
