import { call, takeLatest } from 'redux-saga/effects'
import { LOGIN_ON_CLICK_SUBMIT_LOGIN } from 'actions/auth/login/constants'
import * as apiAuth from 'api/auth'
import { browserHistory } from 'react-router'

function * onClickSubmitLogin (request) {
  let responseLogin
  try {
    const {email, password} = request.payload.loginValues
    const user = {
      user: {
        email: email,
        password: password
      }
    }
    responseLogin = yield call(apiAuth.loginUser, user)
    console.log(responseLogin)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
    Cookies.set('access_token', responseLogin.data.access_token)
    browserHistory.push('/survey')
  }
}

export default function * authSaga () {
  yield takeLatest(LOGIN_ON_CLICK_SUBMIT_LOGIN, onClickSubmitLogin)
}
