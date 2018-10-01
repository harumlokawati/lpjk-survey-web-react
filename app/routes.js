import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from 'pages/App'

import Dashboard from 'pages/Dashboard'
import Survey from 'pages/Survey'
import CompanyProfile from 'pages/Profile'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Review from 'pages/Review'

import { showSnackBar } from 'actions/notification'

module.exports = (store) => {
  const history = syncHistoryWithStore(browserHistory, store)

  const authorizeUser = (nextState, replace) => {
    const {app: {loggedIn}} = store.getState()
    if (!loggedIn) {
      replace('/login')
    }
  }

  const isLoggedIn = (nextState, replace) => {
    const {app: {loggedIn}} = store.getState()
    if (loggedIn) {
      replace('/profil_perusahaan')
    }
  }

  const checkCompanyProfile = (nextState, replace) => {
    const {app: {companyId}} = store.getState()
    if (!companyId) {
      replace('/profil_perusahaan')
      store.dispatch(showSnackBar({show: true, variant: 'error', message: 'Anda harus mengisi profil perusahaan terlebih dahulu.'}))
    }
  }

  const routes = () => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path='/' component={Dashboard} />
          <Route onEnter={isLoggedIn}>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Route>
          <Route onEnter={authorizeUser} component={App}>
            <Route path='/survey' component={Survey} onEnter={checkCompanyProfile} />
            <Route path='/profil_perusahaan' component={CompanyProfile} />
            <Route path='/daftar_teknologi' component={Review} />
          </Route>
        </Router>
      </Provider>
    )
  }
  return routes
}
