import { put, call, takeLatest } from 'redux-saga/effects'
import { LOGIN_ON_CLICK_SUBMIT_LOGIN } from 'actions/auth/login/constants'
import { REGISTER_ON_CLICK_SUBMIT_REGISTER } from 'actions/auth/register/constants'
import * as actAuth from 'actions/auth/login/index'
import * as regAuth from 'actions/auth/register/index'
import * as apiAuth from 'api/auth'
import { browserHistory } from 'react-router'

function * onClickSubmitLogin (request) {
  try {
    const {email, password} = request.payload.loginValues
    const user = {
      user: {
        email: email,
        password: password
      }
    }
    const responseLogin = yield call(apiAuth.loginUser, user)

    yield put(actAuth.setCompanyId(responseLogin.data.user.company_id))
    fillCredentialData(responseLogin.data)
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actAuth.setIsLogin(true))
    browserHistory.push('/profil_perusahaan')
  }
}

function * onClickSubmitRegister (request) {
  try {
    const {email, password} = request.payload.registerValues
    const user = {
      user: {
        email: email,
        password: password
      }
    }
    yield call(apiAuth.registerUser, user)
  } catch (e) {
    console.log(e)
  } finally {
    browserHistory.push('/login')
    yield put(regAuth.showDialogSuccess(true))
  }
}

function fillCredentialData (data) {
  Cookies.set('access_token', data.access_token)
}

export default function * authSaga () {
  yield takeLatest(LOGIN_ON_CLICK_SUBMIT_LOGIN, onClickSubmitLogin)
  yield takeLatest(REGISTER_ON_CLICK_SUBMIT_REGISTER, onClickSubmitRegister)
}
