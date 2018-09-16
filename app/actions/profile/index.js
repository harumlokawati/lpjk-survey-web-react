import {
  PROFILE_ON_CLICK_CREATE_PROFILE,
  PROFILE_ON_CLICK_UPDATE_PROFILE
} from './constants'

export function onClickCreateProfile (profileValues) {
  return {type: PROFILE_ON_CLICK_CREATE_PROFILE, payload: {profileValues}}
}

export function onClickUpdateProfile (profileValues) {
  return {type: PROFILE_ON_CLICK_UPDATE_PROFILE, payload: {profileValues}}
}
