import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutCustomer } from 'store/customer/actions'
import { removeCustomer } from 'utils/customer'
import { removeToken } from 'utils/token'
import * as routes from 'routes'

import Logo from 'components/Logo'
import { Wrapper, Header, HeaderSection, StyledLink } from './styled'

const handleLogout = props => {
  props.logoutCustomer()
  removeCustomer()
  removeToken()
  props.history.push(routes.HOMEPAGE)
}

const LayoutComponent = props => {
  const { children, isAuthenticated } = props

  return (
    <Fragment>
      <Header>
        <HeaderSection>
          <StyledLink to={routes.PRODUCT_LIST}>All Products</StyledLink>
        </HeaderSection>
        <HeaderSection>
          <StyledLink to={routes.CART}>My Cart</StyledLink>
          {isAuthenticated ? (
            <Fragment>
              <StyledLink to={routes.ACCOUNT}>My Account</StyledLink>
              <button type="submit" onClick={() => handleLogout(props)}>
                Log Out
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <StyledLink to={routes.SIGN_UP}>Sign Up</StyledLink>
              <StyledLink to={routes.SIGN_IN}>Sign In</StyledLink>
            </Fragment>
          )}
        </HeaderSection>
      </Header>
      <Logo />
      <Wrapper>{children}</Wrapper>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: Object.keys(state.customer).length !== 0,
  }
}

const mapDispatchToProps = {
  logoutCustomer,
}

const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutComponent)

export default withRouter(Layout)
