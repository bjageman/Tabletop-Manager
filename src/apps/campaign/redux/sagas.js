import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, verifyData } from 'redux/api'

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
