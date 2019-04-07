import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'
import detail from './detail'

const reducer = combineReducers({
  products,
  cartItems,
  detail,
})

const store = createStore(reducer)

export default store
