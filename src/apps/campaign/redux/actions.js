import { createAction } from 'redux-act';

export const logOutCampaign = createAction('Logs out of the current campaign')
export const getCampaign = createAction('Gets the latest campaign data');
export const updateCampaign = createAction('Updates the website with new campaign data');

export const changeCampaignTab = createAction('Change the campaign tab')
