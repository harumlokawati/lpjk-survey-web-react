import { put, call, takeLatest } from 'redux-saga/effects'
import { LOGIN_ON_CLICK_SUBMIT_LOGIN } from 'actions/auth/login/constants'
import {
  REGISTER_ON_CLICK_SUBMIT_REGISTER,
  REGISTER_ON_CLICK_SUBMIT_ADMIN_REGISTER
} from 'actions/auth/register/constants'
import * as actAuth from 'actions/auth/login/index'
import * as regAuth from 'actions/auth/register/index'
import * as apiAuth from 'api/auth'
import { browserHistory } from 'react-router'
import * as actNotif from 'actions/notification'

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
    if (responseLogin.status === 200) {
      yield put(actAuth.setCompanyId(responseLogin.data.user.company_id))
      yield put(actAuth.setRole(responseLogin.data.user.role))
      fillCredentialData(responseLogin.data)
      yield put(actAuth.setIsLogin(true))
      browserHistory.push('/profil_perusahaan')
      yield put(actNotif.showSnackBar({show: true, variant: 'success', message: 'Selamat Datang!'}))
    }
  } catch (e) {
    console.log(e)
  }
}

function * onClickSubmitRegister (request) {
  try {
    const {email, password, role} = request.payload.registerValues
    const user = {
      user: {
        email: email,
        password: password,
        role: role
      }
    }
    const responseRegister = yield call(apiAuth.registerUser, user)
    if (responseRegister.status === 201) {
      browserHistory.push('/login')
      yield put(regAuth.showDialogSuccess('Registrasi Berhasil!'))
    }
  } catch (e) {
    console.log(e)
  }
}

function * onClickSubmitAdminRegister (request) {
  try {
    const {email, password, role} = request.payload.registerValues
    const user = {
      user: {
        email: email,
        password: password,
        role: role
      }
    }
    const responseRegister = yield call(apiAuth.registerUser, user)
    if (responseRegister.status === 201) {
      yield put(actNotif.showSnackBar({show: true, variant: 'success', message: 'Registrasi Admin Berhasil!'}))
    }
  } catch (e) {
    console.log(e)
  }
}

function fillCredentialData (data) {
  Cookies.set('access_token', data.access_token)
}

export default function * authSaga () {
  yield takeLatest(LOGIN_ON_CLICK_SUBMIT_LOGIN, onClickSubmitLogin)
  yield takeLatest(REGISTER_ON_CLICK_SUBMIT_REGISTER, onClickSubmitRegister)
  yield takeLatest(REGISTER_ON_CLICK_SUBMIT_ADMIN_REGISTER, onClickSubmitAdminRegister)
}
