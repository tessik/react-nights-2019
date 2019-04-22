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
import SignIn from 'pages/SignIn'
import Account from 'pages/Account'
import { configureStore } from './store'
import { getCustomer } from 'utils/customer'

const store = configureStore({
  customer: getCustomer(),
})

const App = () => (
  <Provider store={store}>
    <Layout>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/account" component={Account} />
      </Switch>
    </Layout>
  </Provider>
)

export default App
