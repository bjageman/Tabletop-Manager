import { createReducer } from 'redux-act';
import * as actions from './actions';

import data from '../mock-data/blog.json'

const initial = {
  journal: {
    owner: null,
    entries: [],
    error: null,
  },
};

export const journal = createReducer({
  [actions.getJournal]: (state, payload) => {
    return { journal: data[payload.journal_id], fetching:true, error: null };
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
