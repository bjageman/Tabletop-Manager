import { takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

import { registerUser, loginUser } from 'apps/user/redux/sagas'
import { getJournal, saveJournalEntry, deleteJournalEntry } from 'apps/journal/redux/sagas'
import { getCalendar, saveCalendarEvent, deleteCalendarEvent } from 'apps/calendar/redux/sagas'
import { getCharacters, createCharacter, deleteCharacter } from 'apps/characters/redux/sagas'
import { getMaps, saveMap, deleteMap } from 'apps/maps/redux/sagas'
import { getCampaign } from 'apps/campaign/redux/sagas'



export default function* rootSaga() {
  yield takeEvery(actions.register, registerUser);
  yield takeEvery(actions.login, loginUser);
  //Journal
  yield takeEvery(actions.getJournal, getJournal)
  yield takeEvery(actions.saveJournalEntry, saveJournalEntry)
  yield takeEvery(actions.deleteJournalEntry, deleteJournalEntry)
  //Characters
  yield takeEvery(actions.getCharacters, getCharacters)
  yield takeEvery(actions.createCharacter, createCharacter)
  yield takeEvery(actions.deleteCharacter, deleteCharacter)
  //Calendar
  yield takeEvery(actions.getCalendar, getCalendar)
  yield takeEvery(actions.saveCalendarEvent, saveCalendarEvent)
  yield takeEvery(actions.deleteCalendarEvent, deleteCalendarEvent)
  //maps
  yield takeEvery(actions.getMaps, getMaps)
  yield takeEvery(actions.saveMap, saveMap)
  yield takeEvery(actions.deleteMap, deleteMap)
  //Campaign
  yield takeEvery(actions.getCampaign, getCampaign)
}
