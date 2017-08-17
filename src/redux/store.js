import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducer from './reducers';
import saga from './sagas';
import {persistStore, autoRehydrate} from 'redux-persist'

function configureStore(initialState){
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger()
  const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(
              sagaMiddleware,
              loggerMiddleware,
        ),
        autoRehydrate()
    ),
  );
  sagaMiddleware.run(saga)
  return store;
}

const store = configureStore()
persistStore(store, {whitelist: ['user']})
export default store
