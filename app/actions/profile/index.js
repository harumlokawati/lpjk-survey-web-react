import {
  PROFILE_ON_CLICK_CREATE_PROFILE,
  PROFILE_ON_CLICK_UPDATE_PROFILE,
  PROFILE_GET_PROFILE,
  PROFILE_SET_COMPANY_NAME,
  PROFILE_SET_COMPANY_LOCATION,
  PROFILE_SET_COMPANY_CATEGORY,
  PROFILE_SET_COMPANY_TYPE
} from './constants'

export function onClickCreateProfile (profileValues) {
  return {type: PROFILE_ON_CLICK_CREATE_PROFILE, payload: {profileValues}}
}

export function onClickUpdateProfile (profileValues) {
  return {type: PROFILE_ON_CLICK_UPDATE_PROFILE, payload: {profileValues}}
}

export function getProfile (profileValues) {
  return {type: PROFILE_GET_PROFILE, payload: {profileValues}}
}

export function setCompanyName (companyName) {
  return {type: PROFILE_SET_COMPANY_NAME, payload: {companyName}}
}

export function setCompanyLocation (companyLocation) {
  return {type: PROFILE_SET_COMPANY_LOCATION, payload: {companyLocation}}
}

export function setCompanyCategory (companyCategory) {
  return {type: PROFILE_SET_COMPANY_CATEGORY, payload: {companyCategory}}
}

export function setCompanyType (companyType) {
  return {type: PROFILE_SET_COMPANY_TYPE, payload: {companyType}}
}
