import React from 'react'
import {hot} from 'react-hot-loader'

class App extends React.Component {
  render () {
    return (
      <div>
        <h2>Hello world</h2>
      </div>
    )
  }
}

export default hot(module)(App)
