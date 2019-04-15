import { LOGIN, LOGOUT } from './actions'

const reducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      }
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      }
    default:
      return state
  }
}

export default reducer
