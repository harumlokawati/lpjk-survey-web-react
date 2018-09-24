import {
  LOGIN_ON_CLICK_SUBMIT_LOGIN
} from './constants'

import {
  SET_IS_LOGIN,
  SET_COMPANY_ID
} from '../../constants'

export function onClickSubmitLogin (loginValues) {
  return {type: LOGIN_ON_CLICK_SUBMIT_LOGIN, payload: {loginValues}}
}

export function setIsLogin (loggedIn) {
  console.log(loggedIn)
  return {type: SET_IS_LOGIN, payload: {loggedIn}}
}

export function setCompanyId (companyId) {
  return {type: SET_COMPANY_ID, payload: {companyId}}
}
