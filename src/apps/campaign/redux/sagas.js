import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, verifyData } from 'redux/api'


export function* getCampaign(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          console.log("Success! " + response.data)
          yield put(actions.updateCampaign(response.data))
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
