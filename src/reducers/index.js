import { combineReducers } from 'redux'

import requestReducer from './request'
import uiReducer from './ui'
import detailReducer from './detail'

export default combineReducers({
  request: requestReducer,
  ui: uiReducer,
  detail: detailReducer
})
