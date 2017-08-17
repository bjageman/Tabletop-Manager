import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  campaign: null,
};

export const campaign = createReducer({
  [actions.updateCampaign]: (state, payload) => {
    return {
        id: payload.id,
        name: payload.name,
        image: payload.header_image,
        owner: payload.owner,
        journal: payload.journal,
        calendar: payload.calendar,
        characters: payload.characters,
        maps: payload.maps };
  },
}, initial.campaign);
