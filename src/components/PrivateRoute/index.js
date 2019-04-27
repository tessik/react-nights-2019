import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as R from 'ramda'

const PrivateRouteComponent = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
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

const mapStateToProps = state => ({
  isAuthenticated: !R.isEmpty(state.customer),
})

const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)

export default PrivateRoute
