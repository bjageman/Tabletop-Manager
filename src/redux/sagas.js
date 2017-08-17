import { takeEvery } from 'redux-saga/effects';
import * as actions from './actions';

import { registerUser, loginUser } from 'apps/user/redux/sagas'
import { saveJournalEntry, deleteJournalEntry } from 'apps/journal/redux/sagas'
import { saveCalendarEvent, deleteCalendarEvent } from 'apps/calendar/redux/sagas'
import { createCharacter, deleteCharacter } from 'apps/characters/redux/sagas'
import { getCampaign } from 'apps/campaign/redux/sagas'



export default function* rootSaga() {
  yield takeEvery(actions.register, registerUser);
  yield takeEvery(actions.login, loginUser);
  //Journal
  yield takeEvery(actions.saveJournalEntry, saveJournalEntry)
  yield takeEvery(actions.deleteJournalEntry, deleteJournalEntry)
  //Characters
  yield takeEvery(actions.createCharacter, createCharacter)
  yield takeEvery(actions.deleteCharacter, deleteCharacter)
  //Journal
  yield takeEvery(actions.saveCalendarEvent, saveCalendarEvent)
  yield takeEvery(actions.deleteCalendarEvent, deleteCalendarEvent)
  //Campaign
  yield takeEvery(actions.getCampaign, getCampaign)
}
