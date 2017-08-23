import {
  BREAKPOINT_ADD
} from '../actions'

function breakpointReducer (state = [], action) {
  switch (action.type) {
    case BREAKPOINT_ADD:
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

export default breakpointReducer
