import { isFSA } from 'flux-standard-action'
import invariant from 'invariant'
import {
  PROFILE_SET_COMPANY_NAME,
  PROFILE_SET_COMPANY_LOCATION,
  PROFILE_SET_COMPANY_CATEGORY,
  PROFILE_SET_COMPANY_TYPE
} from 'actions/profile/constants'

let initialState = {
  companyName: null,
  companyLocation: {},
  companyCategory: {},
  companyType: {}
}

const reducer = (state = initialState, action) => {
  invariant(
    isFSA(action),
    `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
  )

  const {payload = {}} = action
  switch (action.type) {
    case PROFILE_SET_COMPANY_NAME:
      return {...state, companyName: payload.companyName}
    case PROFILE_SET_COMPANY_LOCATION:
      return {...state, companyLocation: payload.companyLocation}
    case PROFILE_SET_COMPANY_CATEGORY:
      return {...state, companyCategory: payload.companyCategory}
    case PROFILE_SET_COMPANY_TYPE:
      return {...state, companyType: payload.companyType}
    default:
      return {...state}
  }
}

export { reducer }
