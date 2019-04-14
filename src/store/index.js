import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'
import customers from './customers'

const reducer = combineReducers({
  products,
  cartItems,
  customers,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
