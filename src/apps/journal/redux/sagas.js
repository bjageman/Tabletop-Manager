import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { postDataApi, verifyData, deleteDataApi } from 'redux/api'


export function * deleteJournalEntry(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/entry/" + payload.entry_id
      console.log(url)
      const response = yield call(deleteDataApi, url);
      if (verifyData(response)) {
          console.log("Deleted entry!")
          yield put(actions.getCampaign({id: payload.campaign_id}))
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
          console.log(" successfully saved entry!")
          yield put(actions.getCampaign({id: payload.campaign_id}))
        //   yield put(actions.registerSuccess(response.data))
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
