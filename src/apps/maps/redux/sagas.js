import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, postDataApi, deleteDataApi, verifyData } from 'redux/api'

export function* getMaps(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id + "/maps"
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          yield put(actions.mapSuccess({ entries: response.data }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}


export function* saveMap(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/maps"
      let data = payload.file
      data.append('author_id', payload.author_id)
      data.append('name', payload.name)
      const response = yield call(postDataApi, url, data, payload.access_token);
      if (verifyData(response)) {
          yield put(actions.getMaps({id: payload.campaign_id}))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
  }


export function * deleteMap(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/maps/" + payload.map_id
      const response = yield call(deleteDataApi, url, payload.access_token);
      if (verifyData(response)) {
          yield put(actions.getMaps({id: payload.campaign_id}))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ "message": error.message }))
      }
}
