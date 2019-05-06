import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import * as routes from 'routes'
import Link from 'next/link'

import Logo from 'components/Logo'
import { Wrapper, Header, HeaderSection, StyledLink } from './styled'

const Layout = props => {
  const { children, isAuthenticated } = props

  return (
    <Fragment>
      <Header data-cy="header">
        <HeaderSection>
          <Link href={routes.PRODUCT_LIST}>
            <StyledLink>All Products</StyledLink>
          </Link>
        </HeaderSection>
        <HeaderSection>
          <Link href={routes.CART}>
            <StyledLink>My Cart</StyledLink>
          </Link>
          {isAuthenticated ? (
            <Fragment>
              <Link href={routes.ACCOUNT}>
                <StyledLink>My Account</StyledLink>
              </Link>
              <Link href={routes.LOG_OUT}>
                <StyledLink>Logout</StyledLink>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link href={routes.SIGN_UP}>
                <StyledLink>Sign Up</StyledLink>
              </Link>
              <Link href={routes.SIGN_IN}>
                <StyledLink>Sign In</StyledLink>
              </Link>
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
