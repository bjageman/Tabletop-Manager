import { createAction } from 'redux-act';

export const logOutCampaign = createAction('Logs out of the current campaign')

export const getCampaign = createAction('Gets the latest campaign data');
export const getCampaigns = createAction('Get a list of campaign data');
export const campaignsSuccess = createAction('successfully retrieved list of campaigns')
export const campaignSuccess = createAction('successfully retrieved specfic campaign')

export const updateCampaign = createAction('Updates the website with new campaign data');

export const saveCampaign = createAction('Save a new or existing campaign')
export const deleteCampaign = createAction('Delete the specified campaign (and all corresponding models)')
