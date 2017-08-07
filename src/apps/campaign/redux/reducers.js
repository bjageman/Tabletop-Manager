import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  campaign: null,
};

export const campaign = createReducer({
  [actions.updateCampaign]: (state, payload) => {
    return { characters: payload.characters };
  },
}, initial.campaign);
