import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'
import customer from './customer'

const reducer = combineReducers({
  products,
  cartItems,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
