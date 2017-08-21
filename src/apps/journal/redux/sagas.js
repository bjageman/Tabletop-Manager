import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, postDataApi, verifyData, deleteDataApi } from 'redux/api'

export function* getJournal(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id + "/entry"
      console.log(url)
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          yield put(actions.journalSuccess({ entries: response.data }))
        }else{
          var error = response.data.error
          console.log(error)
          yield put(actions.error({ error }))
        }
      }catch(error){
        console.log(error.message)
        yield put(actions.error({ "error": error.message }))
      }
}


export function* saveJournalEntry(action) {
    try{
      let payload = action.payload
      let data = {"name": payload.name, "content": payload.content, "author_id": 1 }
      let url = 'campaign/' + payload.campaign_id + "/entry"
      if ( payload.entry_id != null ){
          url = url + "/" + payload.entry_id
      }
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          yield put(actions.getJournal({ id: payload.campaign_id }))
        }else{
          var error = response.data.error
          console.log(error)
          yield put(actions.error({ error }))
        }
      }catch(error){
        console.log(error.message)
        yield put(actions.error({ "error": error.message }))
      }
}

export function * deleteJournalEntry(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/entry/" + payload.entry_id
      console.log(url)
      const response = yield call(deleteDataApi, url);
      if (verifyData(response)) {
          yield put(actions.getJournal({ id: payload.campaign_id }))
        }else{
          var error = response.data.error
          console.log(error)
          yield put(actions.error({ error }))
        }
      }catch(error){
        console.log(error.message)
        yield put(actions.error({ "error": error.message }))
      }
}
