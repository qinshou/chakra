import { REQUEST_CLEAR } from '../actions'
import { APPEND_REQUEST } from '../actions/bridge'

function requestReducer (state = [], action) {
  switch (action.type) {
    case APPEND_REQUEST:
      return [...state, action.payload]

    case REQUEST_CLEAR:
      return []

    default:
      return state
  }
}

export default requestReducer
