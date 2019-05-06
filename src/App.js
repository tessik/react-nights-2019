import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import GlobalStyles from './globalStyles'

import Layout from 'components/Layout'
import { ErrorBoundary } from './components/ErrorBoundary'
import { configureStore } from './store'
import { getCustomer } from 'utils/customer'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const store = configureStore({
      customer: getCustomer(),
    })

    return { pageProps, store }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <GlobalStyles />
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default MyApp
