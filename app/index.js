import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './pages/App.js'

// Reducer
import { reducer as surveyReducer } from 'reducers/survey/index'

const reducer = {
  survey: surveyReducer
}

const store = createStore(combineReducers(reducer))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
