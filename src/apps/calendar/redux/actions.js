import { createAction } from 'redux-act';
export const getCalendar = createAction('Retrieve all calendar events')
export const saveCalendarEvent = createAction('Save a calendar event');
export const deleteCalendarEvent = createAction('Delete a calendar event');

export const calendarSuccess = createAction('Successful calendar response')
