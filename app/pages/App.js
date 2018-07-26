import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

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
