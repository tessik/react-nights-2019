import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import cartItems from './cart'
import customer from './customer'

const reducer = combineReducers({
  cartItems,
  customer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = (preloadedState = {}) =>
  createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))
