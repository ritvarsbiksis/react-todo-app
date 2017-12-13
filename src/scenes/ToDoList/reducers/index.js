/* todos */
/* global localStorage */
import _ from 'lodash'
import stringify from 'json-stable-stringify'

import {
  TODO_CREATE,
  TODO_FETCH_LIST,
  TODO_CLEAR_LIST,
  TODO_UPDATE,
  TODO_DELETE
} from '../actions/types'

const INITIAL_STATE = {
  todosById: {},
  categoriesData: [
    { value: 'normal', label: 'Normal' },
    { value: 'urgent', label: 'Urgent' },
    { value: 'important', label: 'Important' },
    { value: 'optional', label: 'Optional' }
  ]
}

export default (state = INITIAL_STATE, { type, payload }) => {
  let newTodosById

  switch (type) {
    case TODO_CREATE:
      let newId

      if (_.isEmpty(state.todosById)) state.todosById = localStorage.getItem(payload.userId) || {}

      newId = !_.isEmpty(state.todosById)
        ? _.chain(state.todosById).orderBy('id', 'desc').value()[0].id + 1
        : 1

      newTodosById = {
        ...state.todosById,
        [newId]: { ...payload, id: newId, done: false }
      }

      localStorage.setItem(payload.userId, stringify(newTodosById))

      return {
        ...state,
        todosById: newTodosById
      }
    case TODO_UPDATE:
      newTodosById = {
        ...state.todosById,
        [payload.id]: {
          ...state.todosById[payload.id],
          ...payload.data
        }
      }

      localStorage.setItem(payload.userId, stringify(newTodosById))

      return {
        ...state,
        todosById: newTodosById
      }
    case TODO_DELETE:
      newTodosById = _.omit(state.todosById, payload)

      localStorage.setItem(payload.userId, stringify(newTodosById))

      return {
        ...state,
        todosById: newTodosById
      }
    case TODO_FETCH_LIST:
      newTodosById = JSON.parse(localStorage.getItem(payload)) || {}

      return {
        ...state,
        todosById: newTodosById
      }
    case TODO_CLEAR_LIST:
      return {
        ...state,
        todosById: {}
      }
    default:
      return state
  }
}
