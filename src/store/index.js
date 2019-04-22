import { createStore, combineReducers } from 'redux'

import cartItems from './cart'
import customer from './customer'

const reducer = combineReducers({
  cartItems,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
