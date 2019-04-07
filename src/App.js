import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import GlobalStyles from './globalStyles'

import Header from 'components/Header'
import Layout from 'components/Layout'
import { ProductList } from 'pages/ProductList'
import { ProductDetail } from 'pages/ProductDetail'
import Cart from 'pages/Cart'
import Contacts from 'pages/Contacts'
import store from './store'

const App = () => (
  <Layout>
    <Header />
    <GlobalStyles />
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Provider>
  </Layout>
)

export default App
