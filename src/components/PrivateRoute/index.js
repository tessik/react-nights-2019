import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import store from 'store'

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isAuthenticated = store.getState().customers.isLogged

  return (
    <Route
      {...rest}
      render={routeProps => {
        if (isAuthenticated) {
          return <Component {...routeProps} />
        }

        return (
          <Redirect
            to={{
              pathname: '/signup',
              state: {
                from: routeProps.location.pathname,
              },
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
