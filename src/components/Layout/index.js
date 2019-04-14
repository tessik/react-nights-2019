import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Logo from 'components/Logo'
import { Wrapper, Header, HeaderSection, StyledLink } from './styled'
import { logoutCustomer } from 'store/customers/actions'
import store from 'store'

class LayoutComponent extends Component {
  state = {
    isLogged: store.getState().customers.isLogged || false,
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logoutCustomer()
  }

  render() {
    const { isLogged } = this.state

    return (
      <Fragment>
        <Header>
          <HeaderSection>
            <StyledLink to="/">All Products</StyledLink>
          </HeaderSection>
          <HeaderSection>
            <StyledLink to="/cart">My Cart</StyledLink>
            {isLogged && <StyledLink to="/account">My Account</StyledLink>}
            {isLogged ? (
              <StyledLink to="/logout" onClick={e => this.handleLogout(e)}>
                Log Out
              </StyledLink>
            ) : (
              <StyledLink to="/signup">Sign Up</StyledLink>
            )}
          </HeaderSection>
        </Header>
        <Logo />
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  logoutCustomer,
}

const Layout = connect(
  null,
  mapDispatchToProps
)(LayoutComponent)

export default Layout
