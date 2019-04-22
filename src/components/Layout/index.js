import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from 'components/Logo'
import { Wrapper, Header, HeaderSection, StyledLink } from './styled'
import { logoutCustomer } from 'store/customer/actions'
import { removeCustomer } from 'utils/customer'
import { removeToken } from 'utils/token'

class LayoutComponent extends Component {
  handleLogout() {
    this.props.logoutCustomer()
    removeCustomer()
    removeToken()
    this.props.history.push('/')
  }

  render() {
    const { children, isAuthenticated } = this.props

    return (
      <Fragment>
        <Header>
          <HeaderSection>
            <StyledLink to="/">All Products</StyledLink>
          </HeaderSection>
          <HeaderSection>
            <StyledLink to="/cart">My Cart</StyledLink>
            {isAuthenticated ? (
              <Fragment>
                <StyledLink to="/account">My Account</StyledLink>
                <button type="submit" onClick={() => this.handleLogout()}>
                  Log Out
                </button>
              </Fragment>
            ) : (
              <Fragment>
                <StyledLink to="/signup">Sign Up</StyledLink>
                <StyledLink to="/signin">Sign In</StyledLink>
              </Fragment>
            )}
          </HeaderSection>
        </Header>
        <Logo />
        <Wrapper>{children}</Wrapper>
      </Fragment>
    )
  }
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
