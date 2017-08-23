import { combineReducers } from 'redux'

import {
  UI_TOOLBAR_STATUS_UPDATE,
  UI_DETAIL_VISIBLE,
  UI_BREAKPOINT_EDIT_VISIBLE
} from '../actions'

const toolbarStatus = {
  recording: false,
  connection: false,
  breakpoint: false
}

function toolbarStatusReducer (state = toolbarStatus, action) {
  switch (action.type) {
    case UI_TOOLBAR_STATUS_UPDATE:
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

function detailVisibleReducer (state = false, action) {
  if (action.type === UI_DETAIL_VISIBLE) {
    return action.payload
  }

  return state
}

function breakpointEditVisibleReducer (state = false, action) {
  if (action.type === UI_BREAKPOINT_EDIT_VISIBLE) {
    return action.payload
  }

  return state
}

export default combineReducers({
  toolbarStatus: toolbarStatusReducer,
  detailVisible: detailVisibleReducer,
  breakpointEditVisible: breakpointEditVisibleReducer
})
