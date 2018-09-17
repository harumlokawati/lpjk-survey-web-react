import { put, call, takeLatest } from 'redux-saga/effects'
import {
  PROFILE_ON_CLICK_CREATE_PROFILE,
  PROFILE_ON_CLICK_UPDATE_PROFILE,
  PROFILE_GET_PROFILE
} from 'actions/profile/constants'
import * as apiProfile from 'api/profile'
import * as actAuth from 'actions/auth/login/index'
import * as actProfile from 'actions/profile/index'

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

function * getProfile (request) {
  try {
    let responseProfile = yield call(apiProfile.getCompany, request.payload.profileValues)

    let companyName = responseProfile.data.name
    let companyLocation = responseProfile.data.location
    let companyCategory = responseProfile.data.category
    let companyType = responseProfile.data.business_type

    yield put(actProfile.setCompanyName(companyName))
    yield put(actProfile.setCompanyLocation(companyLocation))
    yield put(actProfile.setCompanyCategory(companyCategory))
    yield put(actProfile.setCompanyType(companyType))

  } catch (e) {
    console.log(e)
  } finally {
    console.log('success')
  }
}

export default function * profileSaga () {
  yield takeLatest(PROFILE_ON_CLICK_CREATE_PROFILE, onClickCreateProfile)
  yield takeLatest(PROFILE_ON_CLICK_UPDATE_PROFILE, onClickUpdateProfile)
  yield takeLatest(PROFILE_GET_PROFILE, getProfile)
}
