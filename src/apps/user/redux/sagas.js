import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { postAuthData, postDataApi, verifyData } from 'redux/api'

export function* getAuthToken(action) {
    try{
      let payload = action.payload
      let data = {"username": payload.username, "password": payload.password }
      const response = yield call(postAuthData, data);
      if (verifyData(response)) {
          yield put(actions.loginSuccess({ "access_token": response.data.access_token }))
          yield put(actions.getUser({"username": payload.username, "password": payload.password }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ message: "Network Connectivity Error" }))
      }
}

export function* registerUser(action) {
    try{
      let payload = action.payload
      let data = {"username": payload.username, "password": payload.password }
      let url = 'users'
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          yield put(actions.success({"message" : payload.username + " was registered!"}))
          yield put(actions.login(data))
        }else{
          var error = response.data.error
          console.log(error)
          yield put(actions.error({ "message": error }))
        }
      }catch(error){
        console.log(error.message)
        yield put(actions.error({ "message": error.message }))
      }
}

export function* getUser(action) {
    try{
      let payload = action.payload
      let data = {"username": payload.username, "password": payload.password }
      let url = 'users/login'
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          console.log(response.data)
          yield put(actions.loginSuccess({
              "id": response.data.id,
              "username": response.data.username,
              "campaigns": response.data.campaigns }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ message: "Network Connectivity Error" }))
      }
}
