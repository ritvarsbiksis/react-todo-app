import { TODO_CREATE, TODO_FETCH_LIST } from './types'

export const todoCreate = (props) => {
  return {
    type: TODO_CREATE,
    payload: props
  }
}

export const todoFetch = (props) => {
  return {
    type: TODO_FETCH_LIST,
    payload: props
  }
}
