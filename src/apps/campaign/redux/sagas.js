import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, postDataApi, verifyData } from 'redux/api'

export function* getCampaign(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
            yield put(actions.updateCampaign(response.data))
        }else{
            yield put(actions.error({ message: response.data.error }))
        }
      }catch(error){
          yield put(actions.error({ message: "Network Connectivity Error" }))
      }
}

export function* saveCampaign(action) {
    try{
      let payload = action.payload
      let data = {"name": payload.name, "author_id": payload.author.id }
      let url = 'campaign'
      if ( payload.campaign_id != null ){
          url = url + "/" + payload.campaign_id
      }
      const response = yield call(postDataApi, url, data, payload.access_token);
      if (verifyData(response)) {
          yield put(actions.getUser({"access_token": payload.access_token }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}
