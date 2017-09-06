import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, postDataApi, verifyData, deleteDataApi } from 'redux/api'

export function* getJournal(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id + "/journal"
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          yield put(actions.journalSuccess({ entries: response.data }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}

export function* getJournalEntry(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/journal/" + payload.entry_id
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          yield put(actions.journalEntrySuccess({ entry: response.data }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}


export function* saveJournalEntry(action) {
    try{
      let payload = action.payload
      let data = {"name": payload.name, "content": payload.content, "author_id": 1 }
      let url = 'campaign/' + payload.campaign_id + "/journal"
      if ( payload.entry_id != null ){
          url = url + "/" + payload.entry_id
      }
      const response = yield call(postDataApi, url, data, payload.access_token);
      if (verifyData(response)) {
          yield put(actions.getJournal({ id: payload.campaign_id }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}

export function* deleteJournalEntry(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/journal/" + payload.entry_id
      
      const response = yield call(deleteDataApi, url);
      if (verifyData(response)) {
          yield put(actions.getJournal({ id: payload.campaign_id }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}
