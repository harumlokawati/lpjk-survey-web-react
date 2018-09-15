import { isFSA } from 'flux-standard-action'
import invariant from 'invariant'
import {
  REGISTER_ON_SUCCESS
} from 'actions/auth/register/constants'

let initialState = {
  register: {
    success: false
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
    default:
      return {...state}
  }
}

export { reducer }
