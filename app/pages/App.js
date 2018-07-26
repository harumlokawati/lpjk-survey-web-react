import React from 'react'
import {hot} from 'react-hot-loader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { composeWithDevTools } from 'redux-devtools-extension';
import { pageRequest } from 'actions/survey/index'
import Survey from 'pages/Survey'

class App extends React.Component {
  render () {
    return (
      // <div>
      //  <button onClick={() => this._onClickRunApi()}>call api</button>
      // </div>
      <Survey />
    )
  }
}

export default hot(module)(App)
