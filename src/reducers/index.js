import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import CommonReducer from '../reducers/commonReducer'
import ToDoListReducer from '../scenes/ToDoList/reducers'

export default combineReducers({
  common: CommonReducer,
  todos: ToDoListReducer,
  form: formReducer
})
