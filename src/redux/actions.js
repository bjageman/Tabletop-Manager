import { createAction } from 'redux-act';

export * from '../apps/blog/redux/actions';

export const login = createAction('login');
export const logout = createAction('logout');
export const loginSuccess = createAction('login succeeded');
export const register = createAction('register');
export const registerSuccess = createAction('registration succeeded')
export const getError = createAction('received an error message from the server')
