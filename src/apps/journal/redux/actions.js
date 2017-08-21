import { createAction } from 'redux-act';
export const getJournal = createAction('Get a specific journal');
export const getEntry = createAction('Get a specific journal posting');

export const editEntry = createAction('Edit a posting');
export const saveJournalEntry = createAction('Save a posting');
export const deleteJournalEntry = createAction('Delete a journal entry');

export const journalSuccess = createAction('Return a success for any journal actions and update journal data');
