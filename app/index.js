import React from 'react'
import ReactDOM from 'react-dom'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import './styles/main.css'

// Reducer
import { reducer as formReducer } from 'redux-form'
import { reducer as appReducer } from 'reducers/index'
import { reducer as surveyReducer } from 'reducers/survey/index'

// Saga
import surveySaga from 'sagas/survey'
import authSaga from 'sagas/auth'

const sagaMiddleware = createSagaMiddleware()

const reducer = {
  routing: routerReducer,
  app: appReducer,
  survey: surveyReducer,
  form: formReducer
}

const persistedState = loadState()
const store = createStore(
  combineReducers(reducer),
  persistedState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
)
store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

sagaMiddleware.run(surveySaga)
sagaMiddleware.run(authSaga)

const LPJKRoutes = require('./routes')(store)
ReactDOM.render(<LPJKRoutes />, document.getElementById('root'))
