import { combineReducers } from 'redux'

import requestReducer from './request'
import toolbarReducer from './toolbar'

export default combineReducers({
  request: requestReducer,
  toolbar: toolbarReducer
})
