import {
  SET_SHOW_LOADING_SPINNER,
  SET_SHOW_SNACK_BAR
} from '../constants'

export function showLoadingSpinner (showLoadingSpinner) {
  return {type: SET_SHOW_LOADING_SPINNER, payload: {showLoadingSpinner}}
}

export function showSnackBar (snackbar) {
  return {type: SET_SHOW_SNACK_BAR, payload: {snackbar}}
}
