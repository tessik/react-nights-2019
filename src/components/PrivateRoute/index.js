import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

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
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)

export default PrivateRoute
