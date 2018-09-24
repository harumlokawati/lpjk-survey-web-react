import React from 'react'
import {hot} from 'react-hot-loader'
import { connect } from 'react-redux'
import { pageRequest } from 'actions/survey/index'
import Layout from 'components/Layout'

class App extends React.Component {
  render () {
    const {children} = this.props
    return (
      <Layout children={children} />
    )
  }

  _onClickRunApi () {
    // TODO: add saga listener
    this.props.dispatch(pageRequest())
  }
}

function mapStateToProps (state) {
  return {
    data: state.survey
  }
}

const AppComponent = connect(mapStateToProps)(App)

export default hot(module)(AppComponent)
