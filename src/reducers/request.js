import {
  REQUEST_APPEND,
  REQUEST_CLEAR
} from '../actions'

function requestReducer (state = [], action) {
  switch (action.type) {
    case REQUEST_APPEND:
      return [...state, action.payload]

    case REQUEST_CLEAR:
      return []

    default:
      return state
  }
}

export default requestReducer
