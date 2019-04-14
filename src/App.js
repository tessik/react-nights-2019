import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'

import Layout from 'components/Layout'
import PrivateRoute from 'components/PrivateRoute'
import { ProductList } from 'pages/ProductList'
import { ProductDetail } from 'pages/ProductDetail'
import Cart from 'pages/Cart'
import SignUp from 'pages/SignUp'
import Account from 'pages/Account'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Layout>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/account" component={Account} />
      </Switch>
    </Layout>
  </Provider>
)

export default App
