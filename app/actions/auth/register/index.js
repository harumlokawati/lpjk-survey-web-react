import {
  REGISTER_ON_CLICK_SUBMIT_REGISTER,
  REGISTER_ON_CLICK_SUBMIT_ADMIN_REGISTER,
  REGISTER_ON_SUCCESS
} from './constants'

export function onClickSubmitRegister (registerValues) {
  return {type: REGISTER_ON_CLICK_SUBMIT_REGISTER, payload: {registerValues}}
}

export function onClickSubmitAdminRegister (registerValues) {
  return {type: REGISTER_ON_CLICK_SUBMIT_ADMIN_REGISTER, payload: {registerValues}}
}

export function showDialogSuccess (success) {
  return {type: REGISTER_ON_SUCCESS, payload: {success}}
}
