import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { postDataApi, verifyData } from 'redux/api'


export function* saveJournalEntry(action) {
    try{
      let payload = action.payload
      let data = {"title": payload.title, "content": payload.content, "author_id": 1 }
      let url = 'campaign/' + payload.campaign_id + "/entry"
      console.log(url)
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          console.log(" successfully saved entry!")
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
