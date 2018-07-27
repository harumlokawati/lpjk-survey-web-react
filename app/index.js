import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import App from './pages/App.js'
import './styles/main.css'

// Reducer
import { reducer as formReducer } from 'redux-form'
import { reducer as surveyReducer } from 'reducers/survey/index'

// Saga
import surveySaga from 'sagas/survey/index'

const sagaMiddleware = createSagaMiddleware()

const reducer = {
  survey: surveyReducer,
  form: formReducer
}

const store = createStore(combineReducers(reducer),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
)

sagaMiddleware.run(surveySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
