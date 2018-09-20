import { isFSA } from 'flux-standard-action'
import invariant from 'invariant'
import {
  SET_IS_LOGIN,
  SET_COMPANY_ID
} from 'actions/constants'

let initialState = {
  loggedIn: false,
  companyId: null
}

const reducer = (state = initialState, action) => {
  invariant(
    isFSA(action),
    `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
  )

  const {payload = {}} = action
  switch (action.type) {
    case SET_IS_LOGIN:
      return {...state, loggedIn: payload.loggedIn}
    case SET_COMPANY_ID:
      return {...state, companyId: payload.companyId}
    default:
      return {...state}
  }
}

export { reducer }
