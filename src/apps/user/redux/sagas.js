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
          console.log("Successful Registration!")
          yield put(actions.success(response.data))
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
          console.log("Successful Login!")
          yield put(actions.loginSuccess({ "data": response.data }))
        }else{
          console.log(response)
          var error = response.data.error
          console.log(error)
          yield put(actions.error({ "message": error }))
        }
      }catch(error){
        console.log(error)
        yield put(actions.error({ "message": "Network connectivity error" }))
      }
}
