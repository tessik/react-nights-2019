import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import GlobalStyles from './globalStyles'

import Layout from 'components/Layout'
import PrivateRoute from 'components/PrivateRoute'
import { ProductList } from 'pages/ProductList'
import { ProductDetail } from 'pages/ProductDetail'
import Cart from 'pages/Cart'
import SignUp from 'pages/SignUp'
import SignIn from 'pages/SignIn'
import LogOut from 'pages/LogOut'
import Account from 'pages/Account'
import { configureStore } from './store'
import { getCustomer } from 'utils/customer'
import * as routes from 'routes'
import { ErrorBoundary } from './components/ErrorBoundary'

const store = configureStore({
  customer: getCustomer(),
})

const App = () => (
  <Provider store={store}>
    <Layout>
      <GlobalStyles />
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
      <ErrorBoundary>
        <Switch>
          <Route
            path={routes.HOMEPAGE}
            exact
            render={() => <Redirect to={routes.PRODUCT_LIST} />}
          />
          <Route path={routes.PRODUCT_LIST} exact component={ProductList} />
          <Route path={routes.PRODUCT_DETAIL} component={ProductDetail} />
          <Route path={routes.CART} component={Cart} />
          <Route path={routes.SIGN_UP} component={SignUp} />
          <Route path={routes.SIGN_IN} component={SignIn} />
          <Route path={routes.LOG_OUT} component={LogOut} />
          <PrivateRoute path={routes.ACCOUNT} component={Account} />
        </Switch>
      </ErrorBoundary>
    </Layout>
  </Provider>
)

export default App
