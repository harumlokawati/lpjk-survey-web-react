import {
  LOGIN_ON_CLICK_SUBMIT_LOGIN
} from './constants'

export function onClickSubmitLogin (loginValues) {
  return {type: LOGIN_ON_CLICK_SUBMIT_LOGIN, payload: {loginValues}}
}