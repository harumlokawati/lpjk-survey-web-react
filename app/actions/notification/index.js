import {
  SET_SHOW_LOADING_SPINNER
} from '../constants'

export function showLoadingSpinner (showLoadingSpinner) {
  return {type: SET_SHOW_LOADING_SPINNER, payload: {showLoadingSpinner}}
}
