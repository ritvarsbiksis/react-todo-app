import { TODO_CREATE, TODO_FETCH_LIST, TODO_CLEAR_LIST } from './types'

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

export const todoClearList = () => {
  return {
    type: TODO_CLEAR_LIST,
    payload: null
  }
}
