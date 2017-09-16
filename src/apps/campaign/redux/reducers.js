import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  campaign: null,
};

export const campaign = createReducer({
    [actions.getCampaigns]: (state, payload) => {
      return { id: payload.id, fetching:true, error: null  }
    },
    [actions.campaignsSuccess]: (state, payload) => {
        return { entries: payload.entries, fetching:false, error: null }
    },
    [actions.updateCampaign]: (state, payload) => {
        return payload;
    },
    [actions.logOutCampaign]: (state) => {
        return null
    }
}, initial.campaign);
