import { Router, Route, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from 'pages/App'

import Dashboard from 'pages/Dashboard'
import Survey from 'pages/Survey'
import CompanyProfile from 'pages/Profile'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Review from 'pages/Review'

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
    console.log(loggedIn)
    if (loggedIn) {
      replace('/profil_perusahaan')
    }
  }

  const NoMatch = () => (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-md-auto'>
          <div className='alert alert-info' role='alert'>
            <h4>Tidak ada halaman yang tersedia.
            <hr />
              <Link to='/login'>Kembali</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )

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
            <Route path='/survey' component={Survey} />
            <Route path='/survey/:id' component={Survey} />
            <Route path='/profil_perusahaan' component={CompanyProfile} />
            <Route path='/daftar_teknologi' component={Review} />
          </Route>
          <Route path='*' component={NoMatch} />
        </Router>
      </Provider>
    )
  }
  return routes
}
