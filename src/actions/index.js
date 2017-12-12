import { SET_USER } from './types'

export const setUser = (props) => {
  return {
    type: SET_USER,
    payload: props
  }
}
