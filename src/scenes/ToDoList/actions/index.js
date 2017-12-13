import { TODO_CREATE, TODO_UPDATE, TODO_FETCH_LIST, TODO_CLEAR_LIST, TODO_DELETE } from './types'

export const todoCreate = (props) => {
  return {
    type: TODO_CREATE,
    payload: props
  }
}

export const todosUpdate = (props) => {
  return {
    type: TODO_UPDATE,
    payload: props
  }
}

export const todoDelete = (id) => {
  return {
    type: TODO_DELETE,
    payload: id
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
