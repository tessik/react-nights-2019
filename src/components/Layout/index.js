import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import * as routes from 'routes'

import Logo from 'components/Logo'
import { Wrapper, Header, HeaderSection, StyledLink } from './styled'

const Layout = props => {
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
              <StyledLink to={routes.LOG_OUT}>Logout</StyledLink>
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

export default connect(mapStateToProps)(Layout)
