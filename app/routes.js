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

import { showSnackBar } from 'actions/notification'

module.exports = (store) => {
  const history = syncHistoryWithStore(browserHistory, store)

  const checkLogin = (nextState, replace) => {
    const {app: {loggedIn}} = store.getState()
    if (!loggedIn) {
      replace('/login')
    }
  }

  const isLoggedIn = (nextState, replace) => {
    const {app: {loggedIn, role}} = store.getState()
    if (loggedIn) {
      replace(role === 'user' ? '/profil_perusahaan' : '/admin/profil_perusahaan')
    }
  }

  const checkCompanyProfile = (nextState, replace) => {
    const {app: {companyId}} = store.getState()
    if (!companyId) {
      replace('/profil_perusahaan')
      store.dispatch(showSnackBar({
        show: true,
        variant: 'error',
        message: 'Anda harus mengisi profil perusahaan terlebih dahulu.'
      }))
    }
  }

  const authorizeUser = (nextState, replace) => {
    const {app: {role}} = store.getState()
    if (role !== 'user') {
      replace('/admin/profil_perusahaan')
    }
  }

  const authorizeAdmin = (nextState, replace) => {
    const {app: {role}} = store.getState()
    if (role !== 'admin') {
      replace('/profil_perusahaan')
    }
  }

  const NoMatch = () => {
    return <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-md-auto'>
          <div className='alert alert-info' role='alert'>
            <h4>
              Tidak ada halaman yang tersedia.<hr />
              <Link to='/login'>Kembali</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
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
          <Route onEnter={checkLogin} component={App}>
            <Route onEnter={authorizeUser}>
              <Route path='/profil_perusahaan' component={CompanyProfile} />
              <Route onEnter={checkCompanyProfile}>
                <Route path='/survey' component={Survey} onEnter={checkCompanyProfile} />
                <Route path='/survey/:id' component={Survey} onEnter={checkCompanyProfile} />
                <Route path='/daftar_teknologi' component={Review} />
              </Route>
            </Route>
            <Route onEnter={authorizeAdmin}>
              <Route path='/admin/registrasi' component={Survey} />
              <Route path='/admin/profil_perusahaan' component={Survey} />
              <Route path='/admin/daftar_teknologi' component={Review} />
            </Route>
          </Route>
          <Route path='*' component={NoMatch} />
        </Router>
      </Provider>
    )
  }
  return routes
}
