import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { postDataApi, verifyData } from 'redux/api'


export function* registerUser(action) {
    try{
      let payload = action.payload
      let data = {"username": payload.username, "password": payload.password }
      let url = 'users'
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          yield put(actions.success({"message" : payload.username + " was registered! Please Login"}))
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

export function* loginUser(action) {
    try{
      let payload = action.payload
      let data = {"username": payload.username, "password": payload.password }
      let url = 'users/login'
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          yield put(actions.loginSuccess({ "data": response.data }))
        }else{
          yield put(actions.error({ "message": response.data.error }))
        }
      }catch(error){
        yield put(actions.error({ message: "Network Connectivity Error" }))
      }
}
