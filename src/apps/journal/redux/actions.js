import { createAction } from 'redux-act';
export const getJournal = createAction('Get a specific journal');
export const getEntry = createAction('Get a specific journal posting');

export const editEntry = createAction('Edit a posting');
export const saveJournalEntry = createAction('Save a posting');
