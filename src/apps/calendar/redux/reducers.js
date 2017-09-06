import { createReducer } from 'redux-act';
import * as actions from './actions';

const initial = {
  calendar: {
    entries: [],
    owner: null,
    error: null,
  },
};

export const calendar = createReducer({
  [actions.getCalendar]: (state, payload) => {
    return { fetching:true, error: null };
  },
  [actions.calendarSuccess]: (state, payload) => {
    return { entries: payload.entries, fetching:false, error: null };
  },
  [actions.saveCalendarEvent]: (state, payload) => {
    return {
        name: payload.name,
        start_time: payload.start_time,
        end_time: payload.end_time,
        event_id: payload.event_id,
        fetching:true,
        error: null };
  },
  [actions.deleteCalendarEvent]: (state, payload) => {
    return {
        event_id: payload.event_id,
        fetching:true,
        error: null };
  },
}, initial.calendar);
