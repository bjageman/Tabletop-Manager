import { createAction } from 'redux-act';

export * from 'apps/journal/redux/actions';
export * from 'apps/characters/redux/actions';
export * from 'apps/campaign/redux/actions';
export * from 'apps/calendar/redux/actions';
export * from 'apps/maps/redux/actions';
export * from 'apps/user/redux/actions';

export const loading = createAction('A process is currently running')
export const success = createAction('received a success message from the server')
export const error = createAction('received an error message from the server')
export const clear = createAction('Clear the error/success message')
