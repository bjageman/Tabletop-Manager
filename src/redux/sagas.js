import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { postDataApi, verifyData } from './api'
import myConfig from 'config.js';

import { registerUser, loginUser } from 'apps/user/redux/sagas'
import { saveJournalEntry } from 'apps/journal/redux/sagas'
import { getCharacters } from 'apps/characters/redux/sagas'
import { getCampaign } from 'apps/campaign/redux/sagas'

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
    yield fork(loginWebSocket, socket);
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

function* loginWebSocket(socket) {
  while (true) {
    const { payload } = yield take(`${actions.login}`);
    console.log("PAYLOAD:",payload)
    socket.emit('login', { username: payload.username, password: payload.password });
  }
}

export default function* rootSaga() {
  //yield fork(flow);
  yield takeEvery(actions.register, registerUser);
  yield takeEvery(actions.login, loginUser);
  yield takeEvery(actions.saveJournalEntry, saveJournalEntry)
  yield takeEvery(actions.getCharacters, getCharacters)
  yield takeEvery(actions.getCampaign, getCampaign)
}
