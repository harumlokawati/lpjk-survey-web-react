import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from 'pages/App'

import Survey from 'pages/Survey'
import CompanyProfile from 'pages/Profile'
import Login from 'pages/Login'
import Register from 'pages/Register'

module.exports = (store) => {
  const history = syncHistoryWithStore(browserHistory, store)

  const authorizeUser = (nextState, replace) => {
    const {app: {loggedIn}} = store.getState()
    console.log(loggedIn)
    if (!loggedIn) {
      replace('/login')
    }
  }

  const routes = () => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route onEnter={authorizeUser} component={App}>
            <Route path='/survey' component={Survey} />
            <Route path='/profil_perusahaan' component={CompanyProfile} />
          </Route>
        </Router>
      </Provider>
    )
  }
  return routes
}
