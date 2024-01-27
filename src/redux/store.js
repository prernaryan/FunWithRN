// store
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';

import allReducers from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loader'],
};
const persistedReducer = persistReducer(persistConfig, allReducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// Run the saga
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
