import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, postDataApi, deleteDataApi, verifyData } from 'redux/api'

export function* getCharacters(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id + "/characters"
      console.log(url)
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          yield put(actions.charactersSuccess({ entries: response.data }))
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

export function* createCharacter(action) {
    try{
      let payload = action.payload
      let data = {"name": payload.name, "author_id": payload.author_id }
      let url = 'campaign/' + payload.campaign_id + "/characters"
      if ( payload.character_id != null ){
          url = url + "/" + payload.character_id
      }
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          yield put(actions.getCharacters({id: payload.campaign_id}))
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

export function* deleteCharacter(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/characters/" + payload.character_id
      console.log(url)
      const response = yield call(deleteDataApi, url);
      if (verifyData(response)) {
          console.log("Deleted entry!")
          yield put(actions.getCharacters({id: payload.campaign_id}))
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
