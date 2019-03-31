import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalStyles from './globalStyles'

import Header from 'components/Common/Header'
import Layout from 'components/Layout'
import { ProductList } from 'pages/ProductList'
import { ProductDetail } from 'pages/ProductDetail'
import Cart from 'pages/Cart'
import Contacts from 'pages/Contacts'

const App = () => (
  <Layout>
    <Header />
    <GlobalStyles />
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/product/:productId" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </Layout>
)

export default App
