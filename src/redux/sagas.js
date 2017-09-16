import { takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

import { registerUser, getAuthToken, getUser, logout } from 'apps/user/redux/sagas'
import { getJournal, getJournalEntry, saveJournalEntry, deleteJournalEntry } from 'apps/journal/redux/sagas'
import { getCalendar, saveCalendarEvent, deleteCalendarEvent } from 'apps/calendar/redux/sagas'
import { getCharacter, getCharacters, createCharacter, deleteCharacter } from 'apps/characters/redux/sagas'
import { getMaps, saveMap, deleteMap } from 'apps/maps/redux/sagas'
import { getCampaigns, getCampaign, saveCampaign, deleteCampaign } from 'apps/campaign/redux/sagas'



export default function* rootSaga() {
  yield takeEvery(actions.register, registerUser);
  yield takeEvery(actions.login, getAuthToken);
  yield takeEvery(actions.getUser, getUser)
  yield takeEvery(actions.logout, logout);
  //Journal
  yield takeEvery(actions.getJournal, getJournal)
  yield takeEvery(actions.getJournalEntry, getJournalEntry)
  yield takeEvery(actions.saveJournalEntry, saveJournalEntry)
  yield takeEvery(actions.deleteJournalEntry, deleteJournalEntry)
  //Characters
  yield takeEvery(actions.getCharacter, getCharacter)
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
  yield takeEvery(actions.getCampaigns, getCampaigns)
  yield takeEvery(actions.saveCampaign, saveCampaign)
  yield takeEvery(actions.deleteCampaign, deleteCampaign)
}
