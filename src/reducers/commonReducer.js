/* common */
import { SET_USER } from '../actions/types'

const INITIAL_STATE = {
  user: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER:
      console.log(`payload :: `, payload)
      return { ...state, user: payload }
    default:
      return state
  }
}