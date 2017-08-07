import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { postDataApi, getDataApi, verifyData } from 'redux/api'


export function* getCharacters(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/characters"
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          console.log("Success! " + JSON.stringify(response.data))
          yield put(actions.updateCampaign({characters: response.data}))
        }else{
          var error = response.data.error
          console.log("Error: " + error)
          yield put(actions.error({ error }))
        }
      }catch(error){
        console.log("Error: " + error.message)
        yield put(actions.error({ "error": error.message }))
      }
}
