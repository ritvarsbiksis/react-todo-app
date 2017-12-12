/* todos */
/* global localStorage */
import _ from 'lodash'
import stringify from 'json-stable-stringify'

import { TODO_CREATE, TODO_FETCH_LIST, TODO_CLEAR_LIST } from '../actions/types'

const INITIAL_STATE = {
  todosById: {}
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