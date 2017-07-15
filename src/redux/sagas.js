import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import * as actions from './actions';
import { postDataApi, verifyData } from './api'
import myConfig from '../config.js';

console.log(myConfig)
var url = myConfig.API_URL

function connect() {
  const socket = io(url);
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

//Handle anything the server returns
function subscribe(socket) {
  try{
    return eventChannel(emit => {
      socket.on('user_login_success', ({ user }) => {
        //emit(loginSuccess({ user }));
      });
      socket.on('disconnect', e => {
        // TODO: handle
      });
      return () => {};
    });
  }catch(err){
    console.log("reading ERROR: " + err.message)
  }
}

function* readSockets(socket) {
  try{
    const channel = yield call(subscribe, socket);
    while (true) {
      let action = yield take(channel);
      yield put(action);
    }
  }catch(err){
    console.log("readSockets ERROR: " + err.message)
  }

}

function* handleIO(socket) {
  try{
    yield fork(readSockets, socket);
    yield fork(loginUser, socket);
  }catch(err){
    console.log("readSockets ERROR: " + err.message)
  }
}

function* flow() {
  while (true) {
    const socket = yield call(connect);
    const task = yield fork(handleIO, socket);
    let action = yield take(`${actions.logout}`);
    yield cancel(task);
    socket.emit('logout');
  }
}

function* loginUser(socket) {
  while (true) {
    const { payload } = yield take(`${actions.login}`);
    console.log("PAYLOAD:",payload)
    socket.emit('login', { username: payload.username, password: payload.password });
  }
}

function* registerUser() {
    while (true) {
        try{
          let { payload } = yield take(`${actions.register}`);
          let data = {"username": payload.username, "password": payload.password }
          const response = yield call(postDataApi, 'users', data);
          if (verifyData(response)) {
              console.log(response.data.username + " successfully registered!")
              yield put(actions.registerSuccess(response.data))
            }else{
              var error = response.data.error
              console.log(error)
              yield put(actions.getError({ error }))
            }
          }catch(error){
            console.log(error.message)
            yield put(actions.getError({ "error": error.message }))
          }
    }
}

// function* saveBlogEntry() {
//     while (true) {
//         try{
//           let { payload } = yield take(`${actions.saveEntry}`);
//           console.log("Submit SAGA Save!" + payload)
//           let data = {"title": payload.title, "subtitle": payload.subtitle, "content": payload.content, "user_id": 1 }
//           console.log(data)
//           let url = 'blog/' + payload.blog_id + "/entry"
//           console.log(url)
//           const response = yield call(postDataApi, url, data);
//           if (verifyData(response)) {
//               console.log(" successfully saved entry!")
//             //   yield put(actions.registerSuccess(response.data))
//             }else{
//               var error = response.data.error
//               console.log(error)
//               yield put(actions.getError({ error }))
//             }
//           }catch(error){
//             console.log(error.message)
//             yield put(actions.getError({ "error": error.message }))
//           }
//     }
// }

export default function* rootSaga() {
  yield fork(flow);
  yield fork(registerUser);
  // yield fork(saveBlogEntry)
}
