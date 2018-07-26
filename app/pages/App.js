import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { composeWithDevTools } from 'redux-devtools-extension';
import { pageRequest } from 'actions/survey/index'

class App extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => this._onClickRunApi()}>call api</button>
      </div>
    )
  }

  _onClickRunApi () {
    // TODO: add saga listener
    this.props.dispatch(pageRequest())
  }
}

App.propTypes = {
  data: PropTypes.object
}

function mapStateToProps (state) {
  console.log(state)
  return {
    data: state.survey
  }
}

const AppComponent = connect(mapStateToProps)(App)

export default hot(module)(AppComponent)
