import {
  TOOLBAR_CONNECTION,
  TOOLBAR_RECORDING
} from '../actions'

const states = {
  recording: false,
  connection: false
}

function toolbarReducer (state = states, action) {
  switch (action.type) {
    case TOOLBAR_CONNECTION:
    case TOOLBAR_RECORDING:
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

export default toolbarReducer
