import React, { Fragment } from 'react'
import Logo from 'components/Logo'
import { Wrapper, Header, HeaderSection, StyledLink } from './styled'

const Layout = props => {
  return (
    <Fragment>
      <Header>
        <HeaderSection>
          <StyledLink to="/">All Products</StyledLink>
        </HeaderSection>
        <HeaderSection>
          <StyledLink to="/cart">My Cart</StyledLink>|
          <StyledLink to="/account">My Account</StyledLink>|
          <StyledLink to="/signup">Sign Up</StyledLink>
        </HeaderSection>
      </Header>
      <Logo />
      <Wrapper>{props.children}</Wrapper>
    </Fragment>
  )
}

export default Layout
