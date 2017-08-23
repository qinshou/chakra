import {
  DETAIL_DATA
} from '../actions'

function detailReducer (state = {}, action) {
  switch (action.type) {
    case DETAIL_DATA:
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}

export default detailReducer
