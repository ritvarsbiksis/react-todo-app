/* todos */
/* global localStorage */
import _ from 'lodash'
import stringify from 'json-stable-stringify'

import { TODO_CREATE, TODO_FETCH_LIST } from '../actions/types'

const INITIAL_STATE = {
  todosList: [],
  todosById: {}
}

export default (state = INITIAL_STATE, { type, payload }) => {
  let newTodosList

  switch (type) {
    case TODO_CREATE:
      let newId = 1

      if (!_.isEmpty(state.todosList)) {
        newId = _.chain(state.todosList).orderBy('id', 'desc').value()[0].id + 1
      } else {
        state.todosList = localStorage.getItem(payload.userId) || []
      }

      newTodosList = _.concat({ ...payload, id: newId, done: false }, state.todosList)
      localStorage.setItem(payload.userId, stringify(newTodosList))

      return {
        ...state,
        todosList: newTodosList,
        todosById: _.keyBy(newTodosList, 'id')
      }
    case TODO_FETCH_LIST:
      newTodosList = JSON.parse(localStorage.getItem(payload)) || []

      return {
        ...state,
        todosList: newTodosList,
        todosById: !_.isEmpty(newTodosList) ? _.keyBy(newTodosList, 'id') : {}
      }
    default:
      return state
  }
}
