import { isFSA } from 'flux-standard-action'
import invariant from 'invariant'
import {
  SET_SHOW_LOADING_SPINNER,
  SET_SHOW_SNACK_BAR
} from 'actions/constants'
import {
  REGISTER_ON_SUCCESS
} from 'actions/auth/register/constants'

let initialState = {
  register: {
    success: false
  },
  showLoadingSpinner: false,
  snackbar: {
    show: false,
    variant: null,
    message: null
  }
}

const reducer = (state = initialState, action) => {
  invariant(
    isFSA(action),
    `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
  )

  const {payload = {}} = action
  switch (action.type) {
    case REGISTER_ON_SUCCESS:
      return {...state, register: {success: payload.success}}
    case SET_SHOW_LOADING_SPINNER:
      return {...state, showLoadingSpinner: payload.showLoadingSpinner}
    case SET_SHOW_SNACK_BAR:
      return {...state, snackbar: {show: payload.snackbar.show, variant: payload.snackbar.variant, message: payload.snackbar.message}}
    default:
      return {...state}
  }
}

export { reducer }
