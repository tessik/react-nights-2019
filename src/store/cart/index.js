import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'
import * as R from 'ramda'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      }
    case REMOVE_PRODUCT:
      if (state[action.payload] <= 1) {
        return R.omit([action.payload], state)
      }

      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) - 1,
      }
    default:
      return state
  }
}

export default reducer
