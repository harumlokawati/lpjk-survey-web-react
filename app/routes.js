import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './pages/App.js'

module.exports = (store) => {
  const history = syncHistoryWithStore(browserHistory, store)
  const routes = () => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/survey' component={App} />
        </Router>
      </Provider>
    )
  }
  return routes
}
