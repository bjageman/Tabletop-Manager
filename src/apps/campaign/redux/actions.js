import { createAction } from 'redux-act';
export const getCampaign = createAction('Gets the latest campaign data by the given ID or slug');
export const updateCampaign = createAction('Updates the website with new campaign data');
