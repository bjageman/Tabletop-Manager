import { createAction } from 'redux-act';

export * from 'apps/journal/redux/actions';
export * from 'apps/characters/redux/actions';
export * from 'apps/campaign/redux/actions';
export * from 'apps/user/redux/actions';

export const success = createAction('received a success message from the server')
export const error = createAction('received an error message from the server')
