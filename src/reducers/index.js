import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import CommonReducer from '../reducers/commonReducer'

export default combineReducers({
  common: CommonReducer,
  form: formReducer
})
