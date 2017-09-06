import { createAction } from 'redux-act';

export const logOutCampaign = createAction('Logs out of the current campaign')
export const getCampaign = createAction('Gets the latest campaign data');
export const updateCampaign = createAction('Updates the website with new campaign data');

export const saveCampaign = createAction('Save a new or existing campaign')
export const deleteCampaign = createAction('Delete the specified campaign (and all corresponding models)')

//deprecated
export const changeCampaignTab = createAction('Change the campaign tab')
