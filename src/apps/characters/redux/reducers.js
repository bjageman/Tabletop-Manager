import { createReducer } from 'redux-act'
import * as actions from './actions'

const initial = {
  characters: {
      entries: [],
    },
}

export const characters = createReducer({
  [actions.getCharacters]: (state, payload) => {
    return { id: payload.id, fetching:true, error: null, entries: state.entries  }
  },
  [actions.createCharacter]: (state, payload) => {
    return { fetching:true, error: null, entries: state.entries  }
  },
  [actions.charactersSuccess]: (state, payload) => {
    return { entries: payload.entries, fetching:false, error: null }
  },
}, initial.characters)
