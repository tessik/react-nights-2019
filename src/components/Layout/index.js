import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from 'components/Logo'
import { Wrapper, Header, HeaderSection, StyledLink } from './styled'
import { logoutCustomer } from 'store/customers/actions'

class LayoutComponent extends Component {
  handleLogout(e) {
    e.preventDefault()
    this.props.logoutCustomer()

    setTimeout(() => {
      this.props.history.push('/logout')
    }, 500)
  }

  render() {
    const { isLogged, children } = this.props

    return (
      <Fragment>
        <Header>
          <HeaderSection>
            <StyledLink to="/">All Products</StyledLink>
          </HeaderSection>
          <HeaderSection>
            <StyledLink to="/cart">My Cart</StyledLink>
            {isLogged ? (
              <Fragment>
                <StyledLink to="/account">My Account</StyledLink>
                <StyledLink to="/logout" onClick={e => this.handleLogout(e)}>
                  Log Out
                </StyledLink>
              </Fragment>
            ) : (
              <StyledLink to="/signup">Sign Up</StyledLink>
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
    isLogged: state.customers.isLogged,
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
