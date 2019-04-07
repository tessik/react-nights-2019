import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) - 1,
      }
    default:
      return state
  }
}

export default reducer
