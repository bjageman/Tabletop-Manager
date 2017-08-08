import { createAction } from 'redux-act';
export const getCampaignByID = createAction('Gets the latest campaign data by the given ID');
export const getCampaignBySlug = createAction('Gets the latest campaign data by the unique slug');
export const updateCampaign = createAction('Updates the website with new campaign data');
