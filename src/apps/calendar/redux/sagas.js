import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { getDataApi, postDataApi, verifyData, deleteDataApi } from 'redux/api'

export function* getCalendar(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.id + "/calendar"
      console.log(url)
      const response = yield call(getDataApi, url);
      if (verifyData(response)) {
          yield put(actions.calendarSuccess({ entries: response.data }))
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

export function * deleteCalendarEvent(action){
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/calendar/" + payload.event_id
      console.log(url)
      const response = yield call(deleteDataApi, url);
      if (verifyData(response)) {
          console.log("Deleted entry!")
          yield put(actions.getCalendar({ id: payload.campaign_id }))
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

export function* saveCalendarEvent(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/calendar"
      let data = {"name": payload.name, "start_time": payload.start_time, "end_time": payload.end_time, "author_id": payload.author_id }
      if ( payload.event_id != null ){
          url = url + "/" + payload.event_id
      }
      console.log(data)
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          yield put(actions.getCalendar({ id: payload.campaign_id }))
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
