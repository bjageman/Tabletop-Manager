import { createAction } from 'redux-act';
export const getBlog = createAction('Get a specific blog');
export const getEntry = createAction('Get a specific blog posting');

export const editEntry = createAction('Edit a posting');
export const saveEntry = createAction('Save a posting');
