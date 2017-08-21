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
          var error = response.data.error
          console.log(error)
          yield put(actions.error({ error }))
        }
      }catch(error){
        console.log(error.message)
        yield put(actions.error({ "error": error.message }))
      }
}


export function* saveMap(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/maps"
      let data = payload.file
      data.append('author_id', payload.author_id)
      data.append('name', payload.name)
      console.log("ACCESS TOKEN: " + payload.access_token)
      const response = yield call(postDataApi, url, data, payload.access_token);
      if (verifyData(response)) {
          yield put(actions.getMaps({id: payload.campaign_id}))
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


export function * deleteMap(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/maps/" + payload.map_id
      const response = yield call(deleteDataApi, url);
      if (verifyData(response)) {
          yield put(actions.getMaps({id: payload.campaign_id}))
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
