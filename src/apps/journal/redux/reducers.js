import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  journal: {
    owner: null,
    entries: [],
    error: null,
  },
};

export const journal = createReducer({
  [actions.getJournal]: (state, payload) => {
    return { id: payload.id, fetching:true, error: null };
  },
  [actions.journalSuccess]: (state, payload) => {
    return { entries: payload.entries, fetching:false, error: null };
  },
  [actions.journalEntrySuccess]: (state, payload) => {
    return { entry: payload.entry, fetching:false, error: null };
  },
  [actions.saveJournalEntry]: (state, payload) => {
    return {
        name: payload.name,
        content: payload.content,
        journal_id: payload.journal_id,
        fetching:true,
        error: null };
  },
  [actions.deleteJournalEntry]: (state, payload) => {
    return {
        entry_id: payload.entry_id,
        fetching:true,
        error: null };
  },
}, initial.journal);
