import * as actions from 'redux/actions';
import { put, call } from 'redux-saga/effects';
import { postDataApi, verifyData, deleteDataApi } from 'redux/api'


export function* saveMap(action) {
    try{
      let payload = action.payload
      let url = 'campaign/' + payload.campaign_id + "/maps"
      let data = payload.file
      data.append('author_id', payload.author_id)
      data.append('name', payload.name)
      console.log(data)
      const response = yield call(postDataApi, url, data);
      if (verifyData(response)) {
          yield put(actions.getCampaign({id: payload.campaign_id}))
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


// export function * deleteMap(action){
//     try{
//       let payload = action.payload
//       let url = 'campaign/' + payload.campaign_id + "/calendar/" + payload.event_id
//       console.log(url)
//       const response = yield call(deleteDataApi, url);
//       if (verifyData(response)) {
//           console.log("Deleted entry!")
//           yield put(actions.getCampaign({id: payload.campaign_id}))
//         }else{
//           var error = response.data.error
//           console.log(error)
//           yield put(actions.error({ error }))
//         }
//       }catch(error){
//         console.log(error.message)
//         yield put(actions.error({ "error": error.message }))
//       }
// }
