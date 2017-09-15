import { createAction } from 'redux-act';
export const getCharacters = createAction('Get all characters from the campaign');
export const getCharacter = createAction('Get a specific character');

export const createCharacter = createAction('Create a character');
export const deleteCharacter = createAction('Delete a character');

export const characterSuccess = createAction('Successful characters requests')
export const charactersSuccess = createAction('Successful characters requests')
