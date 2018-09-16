import { put, call, takeLatest } from 'redux-saga/effects'
import { PROFILE_ON_CLICK_CREATE_PROFILE, PROFILE_ON_CLICK_UPDATE_PROFILE } from 'actions/profile/constants'
import * as apiProfile from 'api/profile'
import * as actAuth from 'actions/auth/login/index'

function * onClickCreateProfile (request) {
  try {
    let responseProfile = yield call(apiProfile.createCompany, request.payload.profileValues)
    yield put(actAuth.setCompanyId(responseProfile.data.id))
  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
  }
}

function * onClickUpdateProfile (request) {
  try {
    let responseProfile = yield call(apiProfile.updateCompany, request.payload.profileValues)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
  }
}

export default function * profileSaga () {
  yield takeLatest(PROFILE_ON_CLICK_CREATE_PROFILE, onClickCreateProfile)
  yield takeLatest(PROFILE_ON_CLICK_UPDATE_PROFILE, onClickUpdateProfile)
}
