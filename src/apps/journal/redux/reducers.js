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
  [actions.editEntry]: (state, payload) => {
    return { tmp_post: payload.tmp_post, fetching:true, error: null };
  },
  [actions.saveJournalEntry]: (state, payload) => {
    return { title: payload.title, content: payload.content, journal_id: payload.journal_id, fetching:true, error: null };
  },
}, initial.journal);
