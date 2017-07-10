import { createReducer } from 'redux-act';
import * as actions from './actions';

import data from '../mock-data/blog.json'


const initial = {
  blog: {
    owner: null,
    entries: [],
    error: null,
  },
};

export const blog = createReducer({
  [actions.getBlog]: (state, payload) => {
    return { blog: data[payload.blog_id], fetching:true, error: null };
  },
  [actions.editEntry]: (state, payload) => {
    return { tmp_post: payload.tmp_post, fetching:true, error: null };
  },
  [actions.saveEntry]: (state, payload) => {
    return { title: payload.title, subtitle: payload.subtitle, content: payload.content, blog_id: payload.blog_id, fetching:true, error: null };
  },
}, initial.blog);
