import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      }
    case REMOVE_PRODUCT:
      if (state[action.payload] <= 1) {
        let newState = state
        delete newState[action.payload]
        return {
          ...newState,
        }
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
