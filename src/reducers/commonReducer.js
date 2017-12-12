/* common */
import hash from 'hash.js'
import _ from 'lodash'

import { SET_USER } from '../actions/types'

const INITIAL_STATE = {
  user: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER:
      let userID

      if (!_.isEmpty(payload)) {
        const { username, password } = payload
        userID = hash.sha256().update(`${username}${password}`).digest('hex')
      }
      return {
        ...state,
        user: _.isEmpty(payload) ? payload : { ...payload, id: userID.substr(0, 18) }
      }
    default:
      return state
  }
}
