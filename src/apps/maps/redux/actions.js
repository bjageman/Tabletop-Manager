import { createAction } from 'redux-act';
export const getMaps = createAction('Get all maps from the specified campaign')
export const saveMap = createAction('Save a map');
export const deleteMap = createAction('Delete a map');

export const mapSuccess = createAction('Successful map request')
