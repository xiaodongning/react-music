import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { player, app } from './reducers/'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);
const rootReducer = combineReducers({
  player,
  app
});
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(sagas)
export default store