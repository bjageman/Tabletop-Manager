import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  campaign: null,
};

export const campaign = createReducer({
  [actions.changeCampaignTab]: (state, payload) => {
     return { ...state, index: payload.index }
  },
  [actions.updateCampaign]: (state, payload) => {
    return payload;
  },
  [actions.logOutCampaign]: (state) => {
      return null
  }
}, initial.campaign);
